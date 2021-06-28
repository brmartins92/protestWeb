const service = require('../controllers/protest/index');

describe('protest file tests', () => {
    describe('create method test', () => {
        test('return success when create a post', () => {
            const result = service.create('userMock', 'MessageMock');

            expect(result.status).toEqual(200);
            expect(result.message).toEqual('Protest created');
        });

        test('return a error when use create method', () => {
            const result = service.create();

            expect(result.status).toEqual(400);
            expect(result.message).toEqual('Protest not created');
        });
    });

    describe('like method test', () => {
        test('return success when like a post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.like(responseCreate.result[0].id);

            expect(result.status).toEqual(200);
            expect(result.message).toEqual('success');
        });

        test('return a error when like a post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.like(1);

            expect(result.status).toEqual(400);
            expect(result.message).toEqual('Protest not found');
        });
    });

    describe('dislike method test', () => {
        test('return success when dislike a post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.dislike(responseCreate.result[0].id);

            expect(result.status).toEqual(200);
            expect(result.message).toEqual('success');
        });

        test('return a error when dislike a post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.dislike(1);

            expect(result.status).toEqual(400);
            expect(result.message).toEqual('Protest not found');
        });
    });

    describe('remove method test', () => {
        test('return success when delete a post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.remove(responseCreate.result[0].id);

            expect(result.status).toEqual(200);
            expect(result.message).toEqual('success');
        });

        test('return a error when try remove a post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.remove(1);

            expect(result.status).toEqual(400);
            expect(result.message).toEqual('Protest not found');
        });
    });

    describe('get all protest method test', () => {
        test('return success when get all post', () => {
            const result = service.all();

            expect(result.status).toEqual(200);
            expect(result.message).toEqual('success');
        });

        test('return a error when try get all post', () => {
            service.resetData();

            const result = service.all();

            expect(result.status).toEqual(400);
            expect(result.message).toEqual('Protest not found');
        });
    });

    describe('find method test', () => {
        test('return success when get a unique post', () => {
            const responseCreate = service.create('Cascão', 'Test message');

            const result = service.find(responseCreate.result[0].id);

            expect(result.status).toEqual(200);
            expect(result.message).toEqual('success');
        });

        test('return a error when try get a unique post', () => {
            service.create('Cascão', 'Test message');

            const result = service.find(1);

            expect(result.status).toEqual(400);
            expect(result.message).toEqual('Protest not found');
        });
    });

});