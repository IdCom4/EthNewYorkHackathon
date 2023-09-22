import { Request } from 'express'
import { User } from '@Schemas/user'
import { ForbiddenException, Injectable } from '@nestjs/common'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { JwtValidator } from '@Common/auth/strategies/jwt/jwt.validator'
import { Passports } from '@Common/enums'
import { ConfigService } from '@nestjs/config'

/**
 * Represents the strategy used for JWT validation and authentication in NestJS for admin users.
 * It is based on the same principle as the JwtStrategy, but it also checks if the user is an admin.
 *
 * @implements {PassportStrategy}
 */
@Injectable()
export class AdminJwtStrategy extends PassportStrategy(Strategy, Passports.JWT_ADMIN) {
  constructor(private readonly jwtValidator: JwtValidator, configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: configService.get<string>('JWT_SECRET'),
      passReqToCallback: true,
    })
  }

  async validate(request: Request, accessTokenPayload: TTokenPayload): Promise<User> {
    const validatedUser = await this.jwtValidator.validateUser(request, accessTokenPayload)

    if (!validatedUser.isAdmin) throw new ForbiddenException('Vous devez être un administrateur')

    return validatedUser
  }
}
