import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CreditService } from '../../core/services/credit';

import { AlertService } from '../../core/services/alert';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({

    selector: 'app-requests',

    standalone: true,

    imports: [
        CommonModule,
        FormsModule
    ],

    templateUrl: './requests.html'

})

export class Requests implements OnInit {
    constructor(private cd: ChangeDetectorRef) { }
    private service = inject(CreditService);
    private alert = inject(AlertService);
    private router = inject(Router);
    requests: any[] = [];

    status = '';

    ngOnInit() {
        this.load();

    }



    load() {
        this.service.getAll(this.status).subscribe({
            next: (response: any) => {
                const data = response.data;
                this.requests = this.status
                    ? data.filter((r: any) => r.status === this.status)
                    : data;
                this.cd.detectChanges();
            }
        });
    }



    changeStatus(id: number, status: string) {

        this.alert.commentDialog(`${status} request`)

            .then((result) => {

                if (result.isConfirmed) {

                    this.service.updateStatus(id,
                        {
                            status,
                            comment: result.value
                        }

                    )

                        .subscribe({
                            next: () => {
                                this.alert.success(
                                    'Success',
                                    'Request updated successfully'
                                );
                                this.load();
                            },
                            error: (error) => {
                                this.alert.error(
                                    'Error',
                                    error?.error?.message ||
                                    'Unexpected error'
                                );
                            }
                        });
                }
            });
    }



    goToCreate() {

        this.router.navigate(
            ['/create']
        );

    }

}