import {
  Component, ElementRef, OnDestroy, AfterViewInit,
  inject, PLATFORM_ID, ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

// Official HUNAIX Brand Logo — Exact 1:1 Vector Geometry
const HUNAIX_SVG_DATA = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175 186" width="175" height="186">
<path fill="#156FFF" fill-rule="evenodd" d=" M 1 42 L 3 42 L 4 41 L 5 40 L 6 39 L 7 38 L 9 38 L 10 37 L 11 36 L 12 35 L 14 35 L 15 34 L 16 33 L 17 32 L 19 32 L 20 31 L 21 30 L 22 29 L 24 29 L 25 28 L 26 27 L 27 26 L 29 26 L 30 25 L 31 24 L 32 23 L 34 23 L 35 22 L 36 21 L 37 20 L 39 20 L 40 19 L 41 18 L 42 17 L 44 17 L 45 16 L 46 15 L 47 14 L 49 14 L 50 13 L 51 12 L 52 11 L 54 11 L 55 10 L 56 9 L 57 8 L 59 8 L 60 7 L 61 6 L 62 5 L 64 5 L 65 4 L 66 3 L 67 2 L 69 2 L 70 1 L 71 0 L 71 2 L 71 4 L 71 6 L 71 8 L 71 10 L 71 12 L 71 14 L 71 16 L 71 18 L 71 20 L 71 22 L 71 24 L 71 26 L 71 28 L 71 30 L 71 32 L 71 34 L 71 36 L 71 38 L 71 40 L 71 42 L 71 44 L 71 46 L 71 48 L 71 50 L 71 52 L 71 54 L 71 56 L 71 58 L 71 60 L 71 62 L 71 64 L 71 66 L 71 68 L 71 70 L 72 71 L 74 71 L 75 72 L 76 73 L 77 74 L 79 74 L 80 75 L 81 76 L 82 77 L 83 78 L 85 78 L 86 79 L 87 80 L 88 81 L 90 81 L 91 82 L 92 83 L 93 84 L 94 85 L 96 85 L 97 86 L 98 87 L 99 88 L 100 89 L 102 89 L 103 90 L 104 91 L 105 92 L 107 92 L 108 93 L 109 94 L 110 95 L 111 96 L 113 96 L 114 97 L 115 98 L 116 99 L 117 100 L 119 100 L 120 101 L 121 102 L 122 103 L 124 103 L 124 105 L 124 107 L 124 109 L 124 111 L 124 113 L 124 115 L 124 117 L 124 119 L 124 121 L 124 123 L 124 125 L 124 127 L 124 129 L 124 131 L 124 133 L 124 135 L 124 137 L 124 139 L 124 141 L 124 143 L 125 144 L 126 143 L 127 142 L 129 142 L 130 141 L 131 140 L 132 139 L 134 139 L 135 138 L 136 137 L 137 136 L 138 135 L 140 135 L 141 134 L 142 133 L 143 132 L 145 132 L 146 131 L 146 129 L 146 127 L 146 125 L 146 123 L 146 121 L 146 119 L 146 117 L 146 115 L 146 113 L 146 111 L 146 109 L 146 107 L 146 105 L 146 103 L 146 101 L 146 99 L 146 97 L 146 95 L 146 93 L 146 91 L 146 89 L 146 87 L 146 85 L 146 83 L 146 81 L 146 79 L 146 77 L 146 75 L 146 73 L 146 71 L 146 69 L 146 67 L 146 65 L 146 63 L 146 61 L 146 59 L 146 57 L 146 55 L 145 54 L 144 53 L 143 52 L 141 52 L 140 51 L 139 50 L 138 49 L 136 49 L 135 48 L 134 47 L 133 46 L 131 46 L 130 45 L 129 44 L 128 43 L 126 43 L 125 42 L 124 43 L 124 45 L 124 47 L 124 49 L 124 51 L 124 53 L 124 55 L 124 57 L 124 59 L 124 61 L 124 63 L 124 65 L 124 67 L 124 69 L 124 71 L 124 73 L 124 75 L 124 77 L 124 79 L 123 80 L 122 79 L 121 78 L 120 77 L 118 77 L 117 76 L 116 75 L 115 74 L 114 73 L 112 73 L 111 72 L 110 71 L 109 70 L 108 69 L 106 69 L 105 68 L 104 67 L 103 66 L 102 65 L 101 64 L 101 62 L 101 60 L 101 58 L 101 56 L 101 54 L 101 52 L 101 50 L 101 48 L 101 46 L 101 44 L 101 42 L 101 40 L 101 38 L 101 36 L 101 34 L 101 32 L 101 30 L 101 28 L 101 26 L 101 24 L 101 22 L 101 20 L 101 18 L 101 16 L 101 14 L 101 12 L 101 10 L 101 8 L 101 6 L 101 4 L 101 2 L 101 0 L 103 0 L 104 1 L 105 2 L 106 3 L 107 4 L 109 4 L 110 5 L 111 6 L 112 7 L 114 7 L 115 8 L 116 9 L 117 10 L 119 10 L 120 11 L 121 12 L 122 13 L 124 13 L 125 14 L 126 15 L 127 16 L 129 16 L 130 17 L 131 18 L 132 19 L 134 19 L 135 20 L 136 21 L 137 22 L 139 22 L 140 23 L 141 24 L 142 25 L 144 25 L 145 26 L 146 27 L 147 28 L 149 28 L 150 29 L 151 30 L 152 31 L 154 31 L 155 32 L 156 33 L 157 34 L 159 34 L 160 35 L 161 36 L 162 37 L 164 37 L 165 38 L 166 39 L 167 40 L 169 40 L 170 41 L 171 42 L 172 43 L 172 45 L 172 47 L 172 49 L 172 51 L 172 53 L 172 55 L 172 57 L 172 59 L 172 61 L 172 63 L 172 65 L 172 67 L 172 69 L 172 71 L 172 73 L 172 75 L 172 77 L 172 79 L 172 81 L 172 83 L 172 85 L 172 87 L 172 89 L 172 91 L 172 93 L 172 95 L 172 97 L 172 99 L 172 101 L 172 103 L 172 105 L 172 107 L 172 109 L 172 111 L 172 113 L 172 115 L 172 117 L 172 119 L 172 121 L 172 123 L 172 125 L 172 127 L 172 129 L 172 131 L 172 133 L 172 135 L 172 137 L 172 139 L 172 141 L 172 143 L 171 144 L 169 144 L 168 145 L 167 146 L 166 147 L 164 147 L 163 148 L 162 149 L 161 150 L 160 151 L 158 151 L 157 152 L 156 153 L 155 154 L 153 154 L 152 155 L 151 156 L 150 157 L 148 157 L 147 158 L 146 159 L 145 160 L 143 160 L 142 161 L 141 162 L 140 163 L 138 163 L 137 164 L 136 165 L 135 166 L 133 166 L 132 167 L 131 168 L 130 169 L 128 169 L 127 170 L 126 171 L 125 172 L 124 173 L 122 173 L 121 174 L 120 175 L 119 176 L 117 176 L 116 177 L 115 178 L 114 179 L 112 179 L 111 180 L 110 181 L 109 182 L 107 182 L 106 183 L 105 184 L 104 185 L 102 185 L 101 184 L 101 182 L 101 180 L 101 178 L 101 176 L 101 174 L 101 172 L 101 170 L 101 168 L 101 166 L 101 164 L 101 162 L 101 160 L 101 158 L 101 156 L 101 154 L 101 152 L 101 150 L 101 148 L 101 146 L 101 144 L 101 142 L 101 140 L 101 138 L 101 136 L 101 134 L 101 132 L 101 130 L 101 128 L 101 126 L 101 124 L 101 122 L 101 120 L 101 118 L 101 116 L 100 115 L 99 114 L 98 113 L 97 112 L 95 112 L 94 111 L 93 110 L 92 109 L 90 109 L 89 108 L 88 107 L 87 106 L 86 105 L 84 105 L 83 104 L 82 103 L 81 102 L 80 101 L 78 101 L 77 100 L 76 99 L 75 98 L 73 98 L 72 97 L 71 96 L 70 95 L 69 94 L 67 94 L 66 93 L 65 92 L 64 91 L 62 91 L 61 90 L 60 89 L 59 88 L 58 87 L 56 87 L 55 86 L 54 85 L 53 84 L 52 83 L 50 83 L 49 82 L 48 81 L 48 79 L 48 77 L 48 75 L 48 73 L 48 71 L 48 69 L 48 67 L 48 65 L 48 63 L 48 61 L 48 59 L 48 57 L 48 55 L 48 53 L 48 51 L 48 49 L 48 47 L 48 45 L 48 43 L 47 42 L 46 43 L 45 44 L 43 44 L 42 45 L 41 46 L 40 47 L 38 47 L 37 48 L 36 49 L 35 50 L 33 50 L 32 51 L 31 52 L 30 53 L 29 54 L 27 54 L 27 56 L 27 58 L 27 60 L 27 62 L 27 64 L 27 66 L 27 68 L 27 70 L 27 72 L 27 74 L 27 76 L 27 78 L 27 80 L 27 82 L 27 84 L 27 86 L 27 88 L 27 90 L 27 92 L 27 94 L 27 96 L 27 98 L 27 100 L 27 102 L 27 104 L 27 106 L 27 108 L 27 110 L 27 112 L 27 114 L 27 116 L 27 118 L 27 120 L 27 122 L 27 124 L 27 126 L 27 128 L 27 130 L 28 131 L 29 132 L 30 133 L 31 134 L 33 134 L 34 135 L 35 136 L 36 137 L 38 137 L 39 138 L 40 139 L 41 140 L 42 141 L 44 141 L 45 142 L 46 143 L 47 144 L 48 143 L 48 141 L 48 139 L 48 137 L 48 135 L 48 133 L 48 131 L 48 129 L 48 127 L 48 125 L 48 123 L 48 121 L 48 119 L 48 117 L 48 115 L 48 113 L 48 111 L 48 109 L 48 107 L 49 106 L 51 106 L 52 107 L 53 108 L 54 109 L 55 110 L 57 110 L 58 111 L 59 112 L 60 113 L 61 114 L 63 114 L 64 115 L 65 116 L 66 117 L 67 118 L 69 118 L 70 119 L 71 120 L 71 122 L 71 124 L 71 126 L 71 128 L 71 130 L 71 132 L 71 134 L 71 136 L 71 138 L 71 140 L 71 142 L 71 144 L 71 146 L 71 148 L 71 150 L 71 152 L 71 154 L 71 156 L 71 158 L 71 160 L 71 162 L 71 164 L 71 166 L 71 168 L 71 170 L 71 172 L 71 174 L 71 176 L 71 178 L 71 180 L 71 182 L 71 184 L 70 185 L 69 184 L 67 184 L 66 183 L 65 182 L 64 181 L 62 181 L 61 180 L 60 179 L 59 178 L 58 177 L 56 177 L 55 176 L 54 175 L 53 174 L 51 174 L 50 173 L 49 172 L 48 171 L 46 171 L 45 170 L 44 169 L 43 168 L 41 168 L 40 167 L 39 166 L 38 165 L 36 165 L 35 164 L 34 163 L 33 162 L 31 162 L 30 161 L 29 160 L 28 159 L 26 159 L 25 158 L 24 157 L 23 156 L 21 156 L 20 155 L 19 154 L 18 153 L 17 152 L 15 152 L 14 151 L 13 150 L 12 149 L 10 149 L 9 148 L 8 147 L 7 146 L 5 146 L 4 145 L 3 144 L 2 143 L 1 142 L 1 140 L 1 138 L 1 136 L 1 134 L 1 132 L 1 130 L 1 128 L 1 126 L 1 124 L 1 122 L 1 120 L 1 118 L 1 116 L 1 114 L 1 112 L 1 110 L 1 108 L 1 106 L 1 104 L 1 102 L 1 100 L 1 98 L 1 96 L 1 94 L 1 92 L 1 90 L 1 88 L 1 86 L 1 84 L 1 82 L 1 80 L 1 78 L 1 76 L 1 74 L 1 72 L 1 70 L 1 68 L 1 66 L 1 64 L 1 62 L 1 60 L 1 58 L 1 56 L 1 54 L 1 52 L 1 50 L 1 48 L 1 46 L 1 44 L 1 43 Z" />
</svg>`;

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

      <!-- Ambient glow -->
      <div class="absolute rounded-full pointer-events-none"
           style="width:360px; height:360px;
                  background: radial-gradient(circle, rgba(21,111,255,0.28) 0%, rgba(59,130,246,0.12) 45%, transparent 70%);
                  top:50%; left:50%; transform:translate(-50%,-50%); z-index:0;"></div>


    </div>
  `,
  styles: [`:host { display: block; width: 100%; height: 100%; }
    canvas { display: block !important; width: 100% !important; height: 100% !important; }`]
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
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x000000, 0);
    container.appendChild(this.renderer.domElement);

    // ── Studio Lights Setup ────────────────────────────────
    this.scene.add(new THREE.AmbientLight(0xffffff, 2.2));

    // Direct front key light for vibrant colors
    const frontLight = new THREE.DirectionalLight(0xffffff, 4.5);
    frontLight.position.set(0, 2, 12);
    this.scene.add(frontLight);

    const topKeyLight = new THREE.DirectionalLight(0x60a5fa, 4.0);
    topKeyLight.position.set(4, 6, 8);
    this.scene.add(topKeyLight);

    const leftFill = new THREE.DirectionalLight(0x38bdf8, 3.0);
    leftFill.position.set(-6, -2, 6);
    this.scene.add(leftFill);

    const purpleBack = new THREE.PointLight(0x1b5ce8, 5.0, 30);
    purpleBack.position.set(3, 4, 4);
    this.scene.add(purpleBack);

    // ── Build 3D Model from SVG ───────────────────────────
    this.buildLogoFromSvg();

    // ── Mouse Interaction ─────────────────────────────────
    this.boundMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      this.mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };
    this.boundMouseLeave = () => { this.mouseX = 0; this.mouseY = 0; };
    container.addEventListener('mousemove', this.boundMouseMove);
    container.addEventListener('mouseleave', this.boundMouseLeave);

    // ── Resize Observer ───────────────────────────────────
    this.resizeObserver = new ResizeObserver(() => {
      if (!container || !this.renderer || !this.camera) return;
      const nw = container.offsetWidth, nh = container.offsetHeight;
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
   * Parses the official HUNAIX SVG path and builds the 3D extruded mesh
   */
  private buildLogoFromSvg(): void {
    const loader = new SVGLoader();
    const svgData = loader.parse(HUNAIX_SVG_DATA);

    this.logoGroup = new THREE.Group();

    // Premium vibrant royal blue physical material — matches new HUNAIX Enterprise logo
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x1b5ce8,
      emissive: 0x0a2a7a,
      metalness: 0.55,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      reflectivity: 1.0,
      side: THREE.DoubleSide
    });

    const extrudeOpts: THREE.ExtrudeGeometryOptions = {
      depth: 14,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 1.5,
      bevelThickness: 1.5
    };

    const scaleFactor = 0.035;

    for (const path of svgData.paths) {
      const shapes = SVGLoader.createShapes(path);
      for (const shape of shapes) {
        const geo = new THREE.ExtrudeGeometry(shape, extrudeOpts);
        // Center vertex coordinates at (0, 0, 0)
        geo.center();
        // Scale and flip Y axis to match 3D space
        geo.scale(scaleFactor, -scaleFactor, scaleFactor);
        // Recompute vertex normals for perfect lighting on all faces
        geo.computeVertexNormals();

        const mesh = new THREE.Mesh(geo, material);
        this.logoGroup.add(mesh);
      }
    }

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