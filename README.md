# Adapto Seguros — San Miguel, El Salvador

Sitio web corporativo de **Adapto Seguros**, corredora independiente de seguros
con base en San Miguel. Construido con **Astro 7 + Tailwind CSS v4**.

## Requisitos

- Node.js 20 o 22
- npm 10+

## Desarrollo

```powershell
npm install
npm run dev
```

Abre http://localhost:4321

## Producción

```powershell
npm run build   # genera dist/
npm run preview # vista previa del build
```

## Configurar contacto

Edita un solo archivo con los datos reales de la empresa:

- `src/lib/contact.ts` → número de WhatsApp, teléfono, correo, dirección y horario.

## Despliegue

Sitio 100 % estático (`dist/`). Recomendado: **Cloudflare Pages**

- Build command: `npm run build`
- Output directory: `dist`
- Node: 20 o 22
