import { moduleForModel, test } from 'ember-qunit';

moduleForModel('player', 'Unit | Model | player', {
  // Specify the other units that are required for this test.
  needs: ['model:team', 'model:game-player']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
