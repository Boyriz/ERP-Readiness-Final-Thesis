import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const GetCurrentUserId = createParamDecorator((data: undefined, context: ExecutionContext): number | undefined => {
    const request = context.switchToHttp().getRequest();
    console.log('request:', request);
    return request.user?.sub;
})
