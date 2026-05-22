import { Component, inject, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { CreditService } from '../../core/services/credit';

import { AlertService } from '../../core/services/alert';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { Layout } from '../../shared/components/layout/layout';

@Component({

    selector: 'app-requests',

    standalone: true,

    imports: [
        CommonModule,
        FormsModule,
        Layout
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
                console.log(data);

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








    viewComments(id: number) {

        this.service.getHistory(id).subscribe({
            next: (response: any) => {
                console.log(response)

                const comments = response.data.map((item: any) => {


                    // ✅ Formatear fecha
                    const fecha = new Date(item.created_at).toLocaleString('es-PA', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                    });


                    return `
                              <div class="border rounded p-3 mb-2 shadow-sm bg-light">

                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <span class="badge bg-secondary">
                            Estatus: ${item.newStatus}
                        </span>
                    
                    </div>

                    <div class="text-dark mb-1">
                        <strong>Actualización:</strong> ${fecha}
                    </div>

                    <div class="text-dark">
                        <strong>Comentario:</strong> ${item.comment}
                    </div>

                </div>
                `;
                }).join(''); this.alert.history('Comments History', comments);

            }

        });

    }

}