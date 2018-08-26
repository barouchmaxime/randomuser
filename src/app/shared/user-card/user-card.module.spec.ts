import { UserCardModule } from './user-card.module';

describe('UserCardModule', () => {
  let userCardModule: UserCardModule;

  beforeEach(() => {
    userCardModule = new UserCardModule();
  });

  it('should create an instance', () => {
    expect(userCardModule).toBeTruthy();
  });
});
