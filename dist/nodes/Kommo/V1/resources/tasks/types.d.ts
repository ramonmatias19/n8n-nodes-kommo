export interface ITaskModelForm {
    text: string;
    complete_till: string;
    responsible_user_id: number;
    entity_type: 'contacts' | 'leads' | 'companies' | 'customers';
    entity_id: string;
    is_completed: boolean;
    task_type: number;
    duration: string;
    resultText: string;
    created_by: number;
    updated_by: number;
    created_at: string;
    updated_at: string;
}
export interface IFormTask {
    task: Array<ITaskModelForm>;
}
export interface IUpdateTaskForm {
    task: Array<ITaskModelForm & {
        id: number;
    }>;
}
export type Task = {
    id: number;
    created_by: number;
    updated_by: number;
    created_at: number;
    updated_at: number;
    responsible_user_id: number;
    group_id: number;
    entity_id: number;
    entity_type: string;
    is_completed: boolean;
    task_type_id: number;
    text: string;
    duration: number;
    complete_till: number;
    result: {
        text: string;
    };
    account_id: number;
};
export type RequestTaskUpdate = Partial<Exclude<Task, 'id'>> & Pick<Task, 'id'>;
export type RequestTaskCreate = Partial<Exclude<Task, 'id'>> & Pick<Task, 'text' | 'complete_till'>;
