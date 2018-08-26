import { ToolBarModule } from './tool-bar.module';

describe('ToolBarModule', () => {
  let toolBarModule: ToolBarModule;

  beforeEach(() => {
    toolBarModule = new ToolBarModule();
  });

  it('should create an instance', () => {
    expect(toolBarModule).toBeTruthy();
  });
});
