import Choices from 'choices.js'

const selectChoices = document.querySelectorAll('.js-choices')

const selectConfig = {
	allowHTML: true,
	placeholder: true,
	searchEnabled: false,
	shouldSort: false,
	itemSelectText: '',
}

selectChoices?.forEach((select) => {
	new Choices(select, selectConfig)
})