export interface EmployeeFormValue {
  name: string
  surname: string
  jobTitle: string
  salary: string
  agree: boolean
}

export enum EMPLOYEE_FORM_FIELDS {
  NAME = 'name',
  SURNAME = 'surname',
  JOB_TITLE = 'jobTitle',
  SALARY = 'salary',
  AGREE = 'agree'
}