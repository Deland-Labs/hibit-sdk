interface IJobQueue {
  Enqueue(job: JobItem): void;
}
export class JobItem {
  protected task: Promise<any>;

  constructor(task: Promise<any>) {
    this.task = task;
  }
}
