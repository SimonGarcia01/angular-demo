import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type Item = { id: number; name: string };

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="shuffle()">Shuffle</button>
    <ul>
      <li *ngFor="let it of items; trackBy: trackById">{{ it.id }} - {{ it.name }}</li>
    </ul>
  `
})
export class App {
  items: Item[] = [
    { id: 1, name: 'Alpha' },
    { id: 2, name: 'Beta' },
    { id: 3, name: 'Gamma' }
  ];
  shuffle() {
    this.items = [...this.items].reverse();
  }
  trackById(_i: number, it: Item) { return it.id; }
}

bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h3>Attribute binding (attr.)</h3>
//     <button [attr.aria-label]="label" (click)="toggle()">Toggle label</button>
//     <table border="1" style="margin-top:8px">
//       <tr><th>A</th><th>B</th><th>C</th></tr>
//       <tr><td [attr.colspan]="wide ? 2 : 1">Row 1</td><td>Cell</td><td>Cell</td></tr>
//     </table>
//   `
// })
// export class App {
//   wide = true;
//   get label() { return this.wide ? 'Table is wide' : 'Table is narrow'; }
//   toggle() { this.wide = !this.wide; }
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h3>Built-in pipes</h3>
//     <p>Today: {{ today | date:'yyyy-MM-dd' }}</p>
//     <p>Name: {{ name | uppercase }}</p>
//     <p>Chained: {{ ratio | percent:'1.0-2' | uppercase }}</p>
//   `
// })
// export class App {
//   today = new Date();
//   name = 'Ada Lovelace';
//   ratio = 0.756;
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <button (click)="toggle()">Toggle user</button>
//     <p *ngIf="user as u; else empty">Hello {{ u.name }}!</p>
//     <ng-template #empty>No user</ng-template>
//   `
// })
// export class App {
//   user: { name: string } | null = { name: 'Ada' };
//   toggle() { this.user = this.user ? null : { name: 'Ada' }; }
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <button (click)="count = count + 1">Increment</button>
//     <input placeholder="Type" (input)="text = $any($event.target).value" [value]="text" />
//     <p>Count: {{ count }}</p>
//     <p>Text: {{ text || '(empty)' }}</p>
//   `
// })
// export class App {
//   count = 0;
//   text = '';
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   template: `
//     <h3>Templates with ngTemplateOutlet</h3>

//     <label>
//       Type:
//       <select (change)="type = $any($event.target).value">
//         <option value="info">info</option>
//         <option value="warning">warning</option>
//         <option value="success">success</option>
//       </select>
//     </label>

//     <label>
//       Message: <input (input)="msg = $any($event.target).value" [value]="msg" />
//     </label>

//     <ng-container
//       [ngTemplateOutlet]="type === 'info' ? infoTpl : (type === 'warning' ? warnTpl : successTpl)"
//       [ngTemplateOutletContext]="{ $implicit: msg }">
//     </ng-container>

//     <ng-template #infoTpl let-text>
//       <p style="color:royalblue">Info: {{ text }}</p>
//     </ng-template>

//     <ng-template #warnTpl let-text>
//       <p style="color:darkorange">Warning: {{ text }}</p>
//     </ng-template>

//     <ng-template #successTpl let-text>
//       <p style="color:seagreen">Success: {{ text }}</p>
//     </ng-template>
//   `
// })
// export class App {
//   type: 'info' | 'warning' | 'success' = 'info';
//   msg = 'Hello';
// }

// bootstrapApplication(App);



// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component, signal } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <h3>Control Flow</h3>
//     <button (click)="show.set(!show())">Toggle</button>
//     <button (click)="items.set([])">Clear</button>
//     <button (click)="reset()">Reset</button>

//     @if (show()) {
//       <p>Visible</p>
//     } @else {
//       <p>Hidden</p>
//     }

//     <ul>
//       @for (item of items(); track item) {
//         <li>{{ item }}</li>
//       } @empty {
//         <li>No items</li>
//       }
//     </ul>
//   `
// })
// export class App {
//   show = signal(true);
//   items = signal(['One','Two','Three']);
//   reset() { this.items.set(['One','Two','Three']); }
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   template: `
//     <button (click)="toggle()">Toggle user</button>
//     <p>Email: {{ user?.profile?.email || '(none)' }}</p>
//   `
// })
// export class App {
//   user: { profile?: { email?: string } } | undefined = undefined;
//   toggle() {
//     this.user = this.user ? undefined : { profile: { email: 'a@example.com' } };
//   }
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// @Component({

//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule],
//   styles: [`
//     .toolbar { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
//     input { padding: 6px 8px; }
//   `],
//   template: `
//     <h3>Template Reference Variables (#var)</h3>
//     <div class="toolbar">
//       <input #box type="text" placeholder="Type something" (input)="current = box.value" />
//       <button (click)="read(box.value)">Read value</button>
//       <button (click)="box.focus()">Focus input</button>
//       <span style="margin-left:8px;color:#666">length={{ box.value?.length || 0 }}</span>
//     </div>
//     <p>Current: {{ current || '(empty)' }}</p>
//   `
// })
// export class App {
//   current = '';
//   read(val: string) { this.current = val ?? ''; }
// }

// bootstrapApplication(App);

// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));