import VanillaCalendar from 'vanilla-calendar-pro';

const today = new Date();

const options = {
  actions: {
    changeToInput(e, self) {
      if (!self.HTMLInputElement) return;
      if (self.selectedDates[0]) {
        self.HTMLInputElement.value = self.selectedDates[0];
        self.hide();
      } else {
        self.HTMLInputElement.value = '';
      }
    },
  },
	date: {
    min: today.toISOString().split("T")[0],
  },
  settings: {
    visibility: {
      positionToInput: 'center',
      theme: 'light',
    },
    lang: 'ru-RU',
  },
};

const calendarInputs = document.querySelectorAll('.calendar')

calendarInputs?.forEach((elem) => {
	const calendarInput = new VanillaCalendar(elem, options);
	calendarInput.init();
})