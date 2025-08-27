import { describe, expect, test } from '@jest/globals';
import { greet } from './index.ts';

describe('greet function', () => {
    test('greet ishin', () => {
        expect(greet('Ishin')).toBe('Hello, Ishin!');
    });
});
