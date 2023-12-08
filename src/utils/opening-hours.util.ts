export function getOpeningAndClosingTimes(
  schedule: string,
): [number, number] | null {
  if (!schedule || typeof schedule !== 'string') {
    return null;
  }

  const trimmedSchedule = schedule.trim();

  if (trimmedSchedule.toLowerCase().includes('atendimento 24 horas')) {
    // Caso especial: Atendimento 24 horas
    return [0, 24];
  }

  if (trimmedSchedule.toLowerCase().includes('fechado')) {
    // Caso especial: Fechado
    return [0, 0];
  }

  const match = trimmedSchedule.match(/(\d{1,2}:\d{2}) – (\d{1,2}:\d{2})/);
  if (!match) {
    return null; // Tratar caso de erro
  }

  const [, openingHoursString, closingHoursString] = match;
  const [openingHour, closingHour] = openingHoursString
    .split(':')
    .map((time) => parseInt(time.trim()));

  if (isNaN(openingHour) || isNaN(closingHour)) {
    return null; // Tratar caso de erro
  }

  return [openingHour, closingHour];
}
