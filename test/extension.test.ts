import { expect } from 'chai';
import { runAbaqus } from '../src/commands/runAbaqus';
import { submitJob } from '../src/commands/submitJob';
import { parseResults } from '../src/commands/parseResults';

describe('Abaqus Extension Tests', () => {
    it('should run Abaqus simulation', async () => {
        const result = await runAbaqus();
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
    });

    it('should submit a job to Abaqus', async () => {
        const jobDetails = { /* job details here */ };
        const result = await submitJob(jobDetails);
        expect(result).to.be.an('object');
        expect(result.jobId).to.exist;
    });

    it('should parse results from Abaqus', async () => {
        const resultsData = { /* results data here */ };
        const parsedResults = await parseResults(resultsData);
        expect(parsedResults).to.be.an('object');
        expect(parsedResults).to.have.property('status');
    });
});