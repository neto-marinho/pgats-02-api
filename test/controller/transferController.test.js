const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

const app = require('../../src/app');

describe('Transfer Controller', () => {
    describe('POST /api/transfers', () => {
        it('Quando uso dados válidos o retorno será 201', async () => {
            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    "remetente": "marinho",
                    "destinatario": "denise",
                    "valor": 1350
                })
        })
        it.only('Quando informo remetente e destinatario inexistentes recebo 400', async () => {
            const resposta = await request(app)
                .post('/api/transfers')
                .send({
                    "remetente": "marinho",
                    "destinatario": "denise",
                    "valor": 1350
                })
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error');
            expect(resposta.body.error).to.equal('Usuário remetente ou destinatário não encontrado');
        })
    })

    describe('GET /api/transfers', () => {
    })
})
