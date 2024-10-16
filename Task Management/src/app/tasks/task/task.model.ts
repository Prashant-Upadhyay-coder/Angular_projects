export interface Task{
    id: string,
    userId: string,
    title: string,
    summary:string,
    dueDate:string
}
export interface NewaddTask{
    title:string,
    summary:string,
    date:string
  }