const conditionTranslations = {
	new: 'Nuevo',
	used: 'Usado',
	refurbished: 'Reacondicionado',
};

export default function translateCondition(condition) {
	return conditionTranslations[condition.toLowerCase()];
}
