/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
export const checkFactory = (configs) => {
    const validators = [];
    const checks = {};
    configs.forEach((config) => {
        validators.push(config.validator(...config.args, config.errorName, config.errorMsg));
        checks[config.errorName] = config.errorMsg;
    });
    return {
        validators,
        checks,
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2stZmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL2hlbHBlcnMvY2hlY2stZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFLSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFzQixFQUFtQixFQUFFO0lBQ3RFLE1BQU0sVUFBVSxHQUFrQixFQUFFLENBQUM7SUFDckMsTUFBTSxNQUFNLEdBQThCLEVBQUUsQ0FBQztJQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBbUIsRUFBRSxFQUFFO1FBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQ2IsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQ3BFLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPO1FBQ0wsVUFBVTtRQUNWLE1BQU07S0FDUCxDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXG4gKi9cblxuaW1wb3J0IHsgVmFsaWRhdG9yRm4gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDaGVja0NvbmZpZywgUHJlcGFyZWRDaGVja3MgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2NoZWNrLWNvbmZpZy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgY29uc3QgY2hlY2tGYWN0b3J5ID0gKGNvbmZpZ3M6IENoZWNrQ29uZmlnW10pOiBQcmVwYXJlZENoZWNrcyAgPT4ge1xuICBjb25zdCB2YWxpZGF0b3JzOiBWYWxpZGF0b3JGbltdID0gW107XG4gIGNvbnN0IGNoZWNrczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICBjb25maWdzLmZvckVhY2goKGNvbmZpZzogQ2hlY2tDb25maWcpID0+IHtcbiAgICB2YWxpZGF0b3JzLnB1c2goXG4gICAgICBjb25maWcudmFsaWRhdG9yKC4uLmNvbmZpZy5hcmdzLCBjb25maWcuZXJyb3JOYW1lLCBjb25maWcuZXJyb3JNc2cpXG4gICAgKTtcbiAgICBjaGVja3NbY29uZmlnLmVycm9yTmFtZV0gPSBjb25maWcuZXJyb3JNc2c7XG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgdmFsaWRhdG9ycyxcbiAgICBjaGVja3MsXG4gIH07XG59O1xuIl19