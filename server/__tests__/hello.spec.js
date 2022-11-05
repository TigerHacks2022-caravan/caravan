import helloHandler from '../pages/api/hello'
import userHandler from '../pages/api/[slug]'
import { createMocks } from 'node-mocks-http'

// Global Mocks
const mockNewUser = createMocks({
	method: 'POST',
	body: JSON.stringify({
		name: 'henry bald',
		phoneNumber: '354-482-1001',
		email: 'hallohallo@gmail.com'
	})
})

// // example
// describe('Name of feature', () => {
// 	// Local Variables/Mocks
// 	// Hooks: Before All, Afer All, Before Each, After Each
// 	// test case:
// 	// it.skip
// 	// it.only
// 	it('specific case description', async () => {
// 		// 1. Assign
// 		// 2. Act
// 		// 3. Assert
// 	})
// })

describe('Hello Handler', () => {
	it('should return sucess', async () => {
		const { req, res } = createMocks({
			method: 'POST',
			body: JSON.stringify({})
		})
		await helloHandler(req, res)
		expect(res._getStatusCode()).toEqual(200)
		expect(res._getJSONData()).toEqual({
			name: 'John Doe'
		})
	})
})

// describe('Add User Handler', () => {
// 	it('should return success and the new user json', async () => {
// 		await
// 	})
// })
