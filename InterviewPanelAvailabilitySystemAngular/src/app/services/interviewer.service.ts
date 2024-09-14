import { AddInterviewer } from './../models/add-interviewer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Interviewer } from '../models/interviewer.model';
import { ApiResponse } from '../models/ApiResponse{T}';
import { Observable } from 'rxjs';
import { JobRoleInterviewer } from '../models/jobrole.interviewer.model';
import { InterviewRoundInterviewer } from '../models/interviewround.interviewer.model';
import { UpdateInterviewer } from '../models/updateInterviewer.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewerService {
  private apiUrl = "http://localhost:5263/api/Admin/";
  constructor(private http : HttpClient) { }
  getAllInterviewers(page: number, pageSize: number, sortOrder: string, search?: string): Observable<ApiResponse<Interviewer[]>> {
    if (search == null) {
      return this.http.get<ApiResponse<Interviewer[]>>(this.apiUrl + "GetAllEmployees?page=" + page + "&pageSize=" + pageSize + "&sortOrder=" + sortOrder);
    }
    else {
      return this.http.get<ApiResponse<Interviewer[]>>(this.apiUrl + "GetAllEmployees?search=" + search + "&page=" + page + "&pageSize=" + pageSize + "&sortOrder=" + sortOrder);

    }
  }
  getTotalInterviewersCount(search?: string): Observable<ApiResponse<number>> {
    if (search == null) {
      return this.http.get<ApiResponse<number>>(this.apiUrl + "GetTotalEmployeeCount");
    }
    else {
      return this.http.get<ApiResponse<number>>(this.apiUrl + "GetTotalEmployeeCount?search=" + search);

    }
  }
  addInterviewer(addInterviewer : AddInterviewer): Observable<ApiResponse<string>> {
    return this.http.post<ApiResponse<string>>(this.apiUrl+'AddEmployee', addInterviewer);
  }
  getAllJobRoles():Observable<ApiResponse<JobRoleInterviewer[]>>{
    return this.http.get<ApiResponse<JobRoleInterviewer[]>>(this.apiUrl+'GetAllJobRoles');
  }
  getAllInterviewRounds():Observable<ApiResponse<InterviewRoundInterviewer[]>>{
    return this.http.get<ApiResponse<InterviewRoundInterviewer[]>>(this.apiUrl+'GetAllInterviewRounds');
  }

  updateInterviewer(updateInterviewer : UpdateInterviewer): Observable<ApiResponse<string>> {
    return this.http.put<ApiResponse<string>>(this.apiUrl+'EditEmployee/', updateInterviewer);
  }
  
  getEmployeeById(employeeId: number):Observable<ApiResponse<Interviewer>>{
    return this.http.get<ApiResponse<Interviewer>>(this.apiUrl+"GetEmployeeById/"+employeeId)
  }

  deleteEmployeeById(employeeId: number | undefined): Observable<ApiResponse<string>> {
    return this.http.delete<ApiResponse<string>>(this.apiUrl+'RemoveEmployee?id='+employeeId);
  }
  GetIsChangedPasswordById(employeeId: number): Observable<ApiResponse<boolean>> {
      return this.http.get<ApiResponse<boolean>>(this.apiUrl + "GetIsChangedPasswordById/" + employeeId)
  }

}
