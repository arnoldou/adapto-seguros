// Número y datos de contacto — CAMBIA ESTOS VALORES por los reales de Adapto Seguros.
export const WHATSAPP_NUMBER = '50370369115'; // formato internacional sin "+" ni espacios ni guiones
export const WHATSAPP_DISPLAY = '+503 7036-9115';
export const PHONE_DISPLAY = '+503 7036-9115';
export const EMAIL = 'adaptoseguros@gmail.com';
export const ADDRESS = 'San Miguel, El Salvador';
export const SCHEDULE = 'Lun–Vie 8:00 a.m. – 5:00 p.m. · Sáb 8:30 a.m. – 12:00 m.';
export const MAP_QUERY = '13.493926886373442,-88.1943510069309';
export const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&z=17&output=embed`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`;

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
