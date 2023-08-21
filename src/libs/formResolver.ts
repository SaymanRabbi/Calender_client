import { zodResolver } from '@hookform/resolvers/zod';

import type { ZodType } from 'zod';

export default function formResolver(validationSchema: ZodType) {
  return zodResolver(validationSchema);
}
