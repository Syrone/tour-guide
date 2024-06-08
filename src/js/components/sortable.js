import Sortable from 'sortablejs';

const sortableItems = document.querySelectorAll('.js-sortable')

const option = {
	group: "cards",
	onStart: function (evt) {
    const fromColumn = evt.from;
    console.log('Перенос из столбика:', fromColumn);
  },
  onEnd: function (evt) {
    const toColumn = evt.to;
    console.log('Перенос в столбик:', toColumn);
  }
}

sortableItems?.forEach((elem) => {
	Sortable.create(elem, option);
})