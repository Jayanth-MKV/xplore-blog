---
title: 'Mastering NestJS CLI Commands-A Comprehensive Guide with Examples'
description: 'This guide explores essential NestJS CLI commands, providing use cases and code examples for each command.'
date: '2024-03-12' 
---


**Introduction:**
NestJS, a powerful and modular web framework for building scalable server-side applications, comes equipped with a command-line interface (CLI) that streamlines the development process. This guide explores essential NestJS CLI commands, providing use cases and code examples for each command. Whether you're a seasoned developer or a newcomer to NestJS, understanding these commands is crucial for efficiently building robust and maintainable applications.

### NestJS CLI Commands Use Cases

| Command                          | Use Case                                           |
| -------------------------------- | --------------------------------------------------- |
| `nest new project-name`           | Create a new NestJS project from scratch.           |
| `nest generate module module-name`| Organize and encapsulate related functionality.     |
| `nest generate controller controller-name` | Define API endpoints and handle requests.   |
| `nest generate service service-name`      | Encapsulate business logic for reusability. |
| `nest generate provider provider-name`    | Create reusable components (services, controllers, etc.). |
| `nest generate interceptor interceptor-name`| Modify route handler behavior (e.g., logging). |
| `nest generate pipe pipe-name`             | Transform input data in a declarative way.     |
| `nest generate gateway gateway-name`       | Enable real-time communication over WebSocket. |
| `nest generate filter filter-name`         | Customize error responses or log errors.      |
| `nest generate resolver resolver-name`     | Define GraphQL schema behavior.                |
| `nest generate dto dto-name`               | Define the shape of data passed between components. |
| `nest generate enum enum-name`              | Define a set of named constants for readability. |
| `nest generate migration migration-name`   | Manage database schema evolution.              |

### NestJS CLI Commands in Action

#### 1. **Creating a New NestJS Project: `nest new project-name`**

The following command initializes a new NestJS project named "my-app":

```bash
nest new my-app
```

#### 2. **Generating a Module: `nest generate module module-name`**

Creating a module organizes related components. For example, generating a module named "users":

```bash
nest generate module users
```

Import and use the generated module in `app.module.ts`:

```typescript
// src/app.module.ts
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // ... other configurations
})
export class AppModule {}
```

#### 3. **Generating a Controller: `nest generate controller controller-name`**

Generate a controller named "auth" to handle authentication requests:

```bash
nest generate controller auth
```

Import and use the controller in `auth.module.ts`:

```typescript
// src/auth/auth.module.ts
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  // ... other configurations
})
export class AuthModule {}
```

#### 4. **Generating a Service: `nest generate service service-name`**

Generate a service named "user" to handle user-related business logic:

```bash
nest generate service user
```

Import and use the service in `user.controller.ts`:

```typescript
// src/user/user.controller.ts
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): string {
    return this.userService.getUsers();
  }
}
```

#### 5. **Generating a Provider: `nest generate provider provider-name`**

Generate a generic provider named "logger":

```bash
nest generate provider logger
```

Import and use the provider in `app.module.ts`:

```typescript
// src/app.module.ts
import { LoggerProvider } from './logger/logger.provider';

@Module({
  providers: [LoggerProvider],
  // ... other configurations
})
export class AppModule {}
```

#### 6. **Generating an Interceptor: `nest generate interceptor interceptor-name`**

Generate an interceptor named "logging" for route logging:

```bash
nest generate interceptor logging
```

Use the interceptor in `app.controller.ts`:

```typescript
// src/app.controller.ts
import { LoggingInterceptor } from './logging/logging.interceptor';

@Controller()
@UseInterceptors(LoggingInterceptor)
export class AppController {
  // ... controller methods
}
```

#### 7. **Generating a Pipe: `nest generate pipe pipe-name`**

Generate a pipe named "validation" for data validation:

```bash
nest generate pipe validation
```

Apply the pipe in `user.controller.ts`:

```typescript
// src/user/user.controller.ts
import { ValidationPipe } from './validation/validation.pipe';

@Controller('users')
@UsePipes(ValidationPipe)
export class UserController {
  // ... controller methods
}
```

#### 8. **Generating a Gateway: `nest generate gateway gateway-name`**

Generate a WebSocket gateway named "chat":

```bash
nest generate gateway chat
```

Import and use the gateway in `app.module.ts`:

```typescript
// src/app.module.ts
import { ChatGateway } from './chat/chat.gateway';

@Module({
  providers: [ChatGateway],
  // ... other configurations
})
export

 class AppModule {}
```

#### 9. **Generating a Filter: `nest generate filter filter-name`**

Generate an exception filter named "error":

```bash
nest generate filter error
```

Apply the filter in `app.controller.ts`:

```typescript
// src/app.controller.ts
import { ErrorFilter } from './error/error.filter';

@Controller()
@UseFilters(ErrorFilter)
export class AppController {
  // ... controller methods
}
```

#### 10. **Generating a Resolver (GraphQL): `nest generate resolver resolver-name`**

Generate a resolver for GraphQL queries named "post":

```bash
nest generate resolver post
```

Use the resolver in `post.module.ts`:

```typescript
// src/post/post.module.ts
import { PostResolver } from './post.resolver';

@Module({
  providers: [PostResolver],
  // ... other configurations
})
export class PostModule {}
```

#### 11. **Generating a Data Transfer Object (DTO): `nest generate dto dto-name`**

Generate a DTO named "createUser" for creating user data:

```bash
nest generate dto createUser
```

Use the DTO in `user.controller.ts`:

```typescript
// src/user/user.controller.ts
import { CreateUserDto } from './createUser.dto';

@Controller('users')
export class UserController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto): string {
    // ... controller logic
  }
}
```

#### 12. **Generating an Enum: `nest generate enum enum-name`**

Generate an enum named "UserRole" for defining user roles:

```bash
nest generate enum UserRole
```

Use the enum wherever needed:

```typescript
// src/auth/auth.service.ts
import { UserRole } from '../enums/user-role.enum';

@Injectable()
export class AuthService {
  validateUser(role: UserRole): boolean {
    // ... validation logic
  }
}
```

#### 13. **Generating a Database Migration: `nest generate migration migration-name`**

Generate a migration named "create-users-table":

```bash
nest generate migration create-users-table
```

Migrations are managed by the NestJS CLI and the underlying database migration system. No direct import is needed.

### Conclusion

Mastering NestJS CLI commands empowers developers to efficiently build scalable and maintainable applications. Each command serves a specific purpose, from structuring code with modules to handling real-time communication with gateways. By understanding when and how to use these commands, developers can enhance their NestJS development workflow and create robust applications.

Implementing these examples in your NestJS projects will not only streamline your development process but also help you leverage the full potential of NestJS's modular architecture and powerful features. Explore and experiment with these commands to unlock the true potential of your NestJS applications. Happy coding!
