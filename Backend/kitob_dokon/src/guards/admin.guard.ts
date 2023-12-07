// import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
// import { JwtService } from "@nestjs/jwt";
// import { Observable } from "rxjs";
// import { InjectModel } from '@nestjs/sequelize';


// @Injectable()
// export class CreaterAdminGuard implements CanActivate {
//   constructor(
//     private readonly jwtService:JwtService){}
//   canActivate(
//     context: ExecutionContext,
//   ) {
//     const req = context.switchToHttp().getRequest();
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       throw new UnauthorizedException({ message: 'Admin is not authorized' });
//     }
//     const bearer = authHeader.split(' ')[0];
//     const token = authHeader.split(' ')[1];
    
//     if(bearer != 'Bearer' || !token) {
//       throw new UnauthorizedException({ message: 'Admin is not authorized' });
//     }
//     try {
//         async function verify(token: string, jwtService: JwtService) {
//             const admin: Partial<Admin> = await jwtService.verifyAsync(token, {
//               secret: process.env.ACCESS_TOKEN_KEY,
//             });
      
//           if(!admin) {
//             throw new UnauthorizedException({ message: 'Admin is not authorized' });
//           }
              
//           const active = await Admin.findOne({where:{id:admin.id}})
        
//           if(!active.is_active) {
//             throw new UnauthorizedException({ message: 'Admin is not active' });
//           }
      
//           const isadmin = await Admin.findOne({where:{id:admin.id}})

//           if(!isadmin){
//             throw new UnauthorizedException({ message: 'Admin is not found' });
//           }

//           if(admin.role_id == 3){
//             return true;
//           }
//           throw new UnauthorizedException({ message: 'You are not creater or superadmin admin' });
//         }
//         return verify(token, this.jwtService);
//     } catch (error) {
//         throw new UnauthorizedException({message:error.message})
//     }
// }
// }
