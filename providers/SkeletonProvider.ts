import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class SkeletonProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    this.app.container.bind('Skeleton', () => {
      //
    })
  }
}
