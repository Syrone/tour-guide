import VanillaCalendar from 'vanilla-calendar-pro';

const today = new Date();

const options = {
  actions: {
    clickDay(event, self) {
      const wrapper = self.HTMLElement.closest('.dropdown'),
            input = wrapper.querySelector('.calendar-input')

      if (self.selectedDates[0]) {
        input.value = self.selectedDates[0];
      }
      wrapper.classList.remove('is-show')
    }
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