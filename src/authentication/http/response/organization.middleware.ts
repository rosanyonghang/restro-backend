// product-composite.middleware.ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import {ApiKeyService} from "../../services/api-key.service";
import {TokenGuard} from "../token.guard";

@Injectable()
export class OrganizationMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtAuthGuard: TokenGuard,
    private readonly apiKeyService: ApiKeyService,
  ) {}

  async use(req: any, res: Response, next: NextFunction) {
    try {
      // First, try JWT authentication
      await this.jwtAuthGuard.canActivate(req as any);

      // If JWT authentication succeeds, continue to the next middleware
      next();
    } catch (jwtError) {
      // If JWT authentication fails, try API key authentication
      const apiKey = req.headers['x-api-key'] || req.query.apiKey;

      if (!apiKey) {
        return res.status(401).json({ message: 'Authentication failed.' });
      }

      const organization = await this.apiKeyService.getOrganizationByApiKey(
        apiKey,
      );
      if (!organization) {
        return res.status(403).json({ message: 'Invalid API key.' });
      }

      // Attach organization information to the request for later use
      req.organization = organization;

      next();
    }
  }
}
