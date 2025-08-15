import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formateDateTime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBR,
  });
}

export function formateRelativeDate(rawDate: string): string {
  const date = new Date(rawDate);

  return formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}
