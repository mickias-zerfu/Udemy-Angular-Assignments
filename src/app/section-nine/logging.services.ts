export class LoggingService{
    // tslint:disable-next-line: typedef
    logStatusChange(accountStatus: string){
        // tslint:disable-next-line: align
        console.log('A server status changed, new status: ' + accountStatus );
    }
}
