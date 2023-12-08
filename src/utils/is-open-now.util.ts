import * as moment from 'moment-timezone';
import { getOpeningAndClosingTimes } from './opening-hours.util';

export function isOpenNow(weekday_text: string[] = [], place: any): boolean {
  try {
    const currentDayOfWeek = new Date().getDay();
    const daysOfWeek = [
      'domingo',
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quinta-feira',
      'sexta-feira',
      'sábado',
    ];
    const currentDay = daysOfWeek[currentDayOfWeek];

    const todaySchedule = weekday_text.find(
      (schedule) =>
        schedule &&
        typeof schedule === 'string' &&
        schedule.toLowerCase().includes(currentDay),
    );

    if (!todaySchedule) {
      return false;
    }

    const [openingHour, closingHour] = getOpeningAndClosingTimes(todaySchedule);

    if (openingHour === null || closingHour === null) {
      return false;
    }

    const openingTime = moment().hour(openingHour).minute(0).second(0);
    const closingTime = moment().hour(closingHour).minute(0).second(0);

    openingTime.tz('America/Sao_Paulo');
    closingTime.tz('America/Sao_Paulo');

    const currentDateTime = moment().tz('America/Sao_Paulo');

    const isOpen =
      (currentDateTime.isSameOrAfter(openingTime) &&
        currentDateTime.isBefore(closingTime)) ||
      (openingTime.isAfter(closingTime) &&
        (currentDateTime.isSameOrAfter(openingTime) ||
          currentDateTime.isBefore(closingTime)));

    place.opening_hours = {
      open_now: isOpen,
    };

    return isOpen;
  } catch (error) {
    console.error('Erro ao verificar se está aberto agora:', error);
    return false;
  }
}
