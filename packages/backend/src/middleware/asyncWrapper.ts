import { Request, Response, NextFunction } from 'express';

export const asyncWrapper =
  (controller: any) => async (req: Request, res: Response, next: NextFunction) => {
    const response = await controller(req, res, next);
    res.status(200).json({ response, status: 'succes' });
    next();
  };
