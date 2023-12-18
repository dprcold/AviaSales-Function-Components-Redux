export interface uiState {
  checkboxAll: boolean;
  checkboxNoTransfers: boolean;
  checkboxOneTransfers: boolean;
  checkboxTwoTransfers: boolean;
  checkboxThreeTransfers: boolean;
  footerButtonCount: number;
  buttonMoreTickets: boolean;
  showAlertModal: boolean;
  sortButtonCheap: boolean;
  sortButtonFastest: boolean;
  sortButtonOptimal: boolean;
}
export interface uiAction {
  type: string;
  payload?: any;
}
export interface ticketState {
  sessionId: string;
  tickets: any[];
  loading: boolean;
  error: null | string;
  showErrorModal: boolean;
}
export interface ticketType {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string;
      // Код города (iata)
      destination: string;
      // Дата и время вылета туда
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
    {
      // Код города (iata) откуда вылет
      origin: string;
      // Код города (iata) место назначения
      destination: string;
      // Дата и время вылета обратно
      date: string;
      // Массив кодов (iata) городов с пересадками
      stops: string[];
      // Общее время перелёта в минутах
      duration: number;
    },
  ];
}
export interface TicketProps {
  price: number;
  segments: ticketType['segments'];
  carrier: string;
}
