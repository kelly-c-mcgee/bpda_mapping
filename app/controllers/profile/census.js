import Controller, { inject as controller } from '@ember/controller';
import { computed } from 'ember-decorators/object'; // eslint-disable-line
import decennial from '../../table-config/decennial';

const {
  populationDensity,
  sexAndAge,
  mutuallyExclusiveRaceHispanicOrigin,
  hispanicSubgroup,
  asianSubgroup,
  relationshipToHeadOfHouseholdHouseholder,
  householdType,
  housingOccupancy,
  housingTenure,
  tenureByAgeOfHouseholder,
  householdSize,
} = decennial;

export default Controller.extend({
  profile: controller('profile'),
  @computed('model.taskInstance.value') data(value) { return value; },

  asianSubgroup,
  relationshipToHeadOfHouseholdHouseholder,
  hispanicSubgroup,
  householdSize,
  householdType,
  housingOccupancy,
  housingTenure,
  mutuallyExclusiveRaceHispanicOrigin,
  populationDensity,
  sexAndAge,
  tenureByAgeOfHouseholder,
});
