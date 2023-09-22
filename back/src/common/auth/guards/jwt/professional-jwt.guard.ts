import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Passports } from '@Common/enums'

/**
 * This is an alias to our custom `'professional-jwt'` (represented by `Passport.JWT_ADMIN` key) AuthGuard implementation.
 * The `'professional-jwt'`key strategies refers to an authentication system using a JSON Web Token (JWT) to verify user
 * identity.
 * More than the `'jwt'` strategy, this one is used to protect routes that are only accessible by professional users.
 *
 * <p>The actual implementation of the authentication is in the
 * (ProfessionalJwtStrategy)[../strategies/jwt/professional-jwt.strategy.ts] class,
 * which is automatically referenced via the `'professional-jwt'` name.</br>
 * {@link https://docs.nestjs.com/recipes/passport}
 *
 * <p>Sending JWT in `'Authorization'` Header:
 * To authenticate with this strategies, send a request to a protected endpoint with the JWT
 * included in the `'Authorization'` Header.
 * The given JWT must be prefixed by the type `'Bearer'` as follows:
 * ```
 * Authorization: Bearer <JWT>
 * ```
 *
 * <p>Usage:
 * To protect a route using this guard, simply add it to the route definition:
 * ```
 * @UseGuards(ProfessionalJwtAuthGuard)
 * @Get('endpoint')
 * async protectedRoute() {
 *   return { message: 'You are connected !'};
 * }
 * ```
 */
@Injectable()
export class ProfessionalJwtAuthGuard extends AuthGuard(Passports.JWT_PROFESSIONAL) {}