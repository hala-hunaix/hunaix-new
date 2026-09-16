import {
  Component, ElementRef, OnDestroy, AfterViewInit,
  inject, PLATFORM_ID, ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';

/**
 * Exact vector coordinates of the official HUNAIX brand mark (mark-ai-blue.png).
 * 24 pure polygon vertices with 180° rotational symmetry and strictly straight edges.
 * No bezier curves or raster approximation steps.
 */
const LOGO_VERTICES: readonly [number, number][] = [
  [222, 56],
  [222, 205.5],
  [336.5, 280],
  [338, 366.5],
  [385.5, 337],
  [385.5, 173.5],
  [338, 142.5],
  [336.5, 226.5],
  [289, 195.5],
  [289, 56],
  [440, 147.5],
  [440, 363],
  [289, 454],
  [289, 304.5],
  [174.5, 230],
  [173, 143.5],
  [125.5, 173],
  [125.5, 336.5],
  [173, 367.5],
  [174.5, 283.5],
  [222, 314.5],
  [222, 454],
  [71, 362.5],
  [71, 147]
];

@Component({
  selector: 'app-hero-3d-logo',
  standalone: true,
  imports: [],
  host: {
    'ngSkipHydration': 'true'
  },
  template: `
    <div class="relative w-full h-full flex items-center justify-center select-none"
         style="min-height: 420px;">
      <div #canvasContainer class="w-full h-full" style="min-height: 420px; cursor: grab;"></div>

      <!-- Ambient glow behind the 3D logo -->
      <div class="absolute rounded-full pointer-events-none"
           style="width:380px; height:380px;
                  background: radial-gradient(circle, rgba(21,111,255,0.32) 0%, rgba(59,130,246,0.14) 45%, transparent 70%);
                  top:50%; left:50%; transform:translate(-50%,-50%); z-index:0;"></div>
    </div>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100%; }
    canvas { display: block !important; width: 100% !important; height: 100% !important; }
  `]
})
export class Hero3dLogoComponent implements AfterViewInit, OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild('canvasContainer', { static: true })
  canvasContainer!: ElementRef<HTMLDivElement>;

  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private logoGroup!: THREE.Group;
  private animId: number | null = null;
  private mouseX = 0;
  private mouseY = 0;
  private resizeObserver?: ResizeObserver;
  private boundMouseMove!: (e: MouseEvent) => void;
  private boundMouseLeave!: () => void;

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.init(), 100);
    }
  }

  ngOnDestroy(): void {
    if (this.animId !== null) cancelAnimationFrame(this.animId);
    this.resizeObserver?.disconnect();
    this.renderer?.dispose();
    const c = this.canvasContainer?.nativeElement;
    if (c) {
      c.removeEventListener('mousemove', this.boundMouseMove);
      c.removeEventListener('mouseleave', this.boundMouseLeave);
    }
  }

  private init(): void {
    const container = this.canvasContainer?.nativeElement;
    if (!container) return;

    const w = container.offsetWidth || 480;
    const h = container.offsetHeight || 480;

    // ── Scene ─────────────────────────────────────────────
    this.scene = new THREE.Scene();

    // ── Camera ────────────────────────────────────────────
    this.camera = new THREE.PerspectiveCamera(36, w / h, 0.1, 500);
    this.camera.position.set(0, 0, 11.5);

    // ── Renderer ──────────────────────────────────────────
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(w, h);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    // ── Studio Lights Setup ────────────────────────────────
    this.scene.add(new THREE.AmbientLight(0xffffff, 2.4));

    // Direct front key light for vibrant colors
    const frontLight = new THREE.DirectionalLight(0xffffff, 4.0);
    frontLight.position.set(0, 2, 12);
    this.scene.add(frontLight);

    const topKeyLight = new THREE.DirectionalLight(0x60a5fa, 3.5);
    topKeyLight.position.set(4, 6, 8);
    this.scene.add(topKeyLight);

    const leftFill = new THREE.DirectionalLight(0x38bdf8, 2.8);
    leftFill.position.set(-6, -2, 6);
    this.scene.add(leftFill);

    const purpleBack = new THREE.PointLight(0x156fff, 4.5, 30);
    purpleBack.position.set(3, 4, 4);
    this.scene.add(purpleBack);

    // ── Build 3D Model ────────────────────────────────────
    this.buildLogoModel();

    // ── Mouse Interaction ─────────────────────────────────
    this.boundMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      this.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    this.boundMouseLeave = () => {
      this.mouseX = 0;
      this.mouseY = 0;
    };
    container.addEventListener('mousemove', this.boundMouseMove);
    container.addEventListener('mouseleave', this.boundMouseLeave);

    // ── Resize Observer ───────────────────────────────────
    this.resizeObserver = new ResizeObserver(() => {
      if (!container || !this.renderer || !this.camera) return;
      const nw = container.offsetWidth;
      const nh = container.offsetHeight;
      if (nw > 0 && nh > 0) {
        this.camera.aspect = nw / nh;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(nw, nh);
      }
    });
    this.resizeObserver.observe(container);

    this.animate();
  }

  /**
   * Constructs the HUNAIX 3D logo mesh directly using pure Three.js Shape geometry.
   * Every face and edge is strictly straight with no raster/bezier approximations.
   */
  private buildLogoModel(): void {
    this.logoGroup = new THREE.Group();

    // Premium vibrant electric/royal blue physical material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x156fff,
      emissive: 0x072874,
      metalness: 0.45,
      roughness: 0.16,
      clearcoat: 0.9,
      clearcoatRoughness: 0.08,
      reflectivity: 0.95,
      side: THREE.DoubleSide
    });

    const shape = new THREE.Shape();
    shape.moveTo(LOGO_VERTICES[0][0], LOGO_VERTICES[0][1]);
    for (let i = 1; i < LOGO_VERTICES.length; i++) {
      shape.lineTo(LOGO_VERTICES[i][0], LOGO_VERTICES[i][1]);
    }
    shape.closePath();

    const extrudeOpts: THREE.ExtrudeGeometryOptions = {
      depth: 30,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 2,
      bevelThickness: 2
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeOpts);
    geo.center();

    // Scale to scene dimensions and flip Y to match 3D space
    const scaleFactor = 0.016;
    geo.scale(scaleFactor, -scaleFactor, scaleFactor);
    geo.computeVertexNormals();

    const mesh = new THREE.Mesh(geo, material);
    this.logoGroup.add(mesh);

    // Set initial isometric tilt
    this.logoGroup.rotation.x = 0.18;
    this.logoGroup.rotation.y = -0.28;

    this.scene.add(this.logoGroup);
  }

  // ── Smooth Animation Loop ──────────────────────────────
  private animate = (): void => {
    this.animId = requestAnimationFrame(this.animate);

    if (this.logoGroup) {
      // Gentle continuous Y rotation
      this.logoGroup.rotation.y += 0.007;

      // Smooth mouse parallax interpolation
      const targetX = -this.mouseY * 0.38 + 0.18;
      const targetZ = this.mouseX * 0.12;
      this.logoGroup.rotation.x += (targetX - this.logoGroup.rotation.x) * 0.05;
      this.logoGroup.rotation.z += (targetZ - this.logoGroup.rotation.z) * 0.05;

      // Floating wave animation
      this.logoGroup.position.y = Math.sin(Date.now() * 0.0014) * 0.18;
    }

    this.renderer?.render(this.scene, this.camera);
  };
}