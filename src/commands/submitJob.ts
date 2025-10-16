import { commands, window } from 'vscode';
import { AbaqusRunner } from '../utils/abaqusRunner';

export function submitJob() {
    const abaqusRunner = new AbaqusRunner();

    window.showInputBox({ prompt: 'Enter the job name to submit:' }).then(jobName => {
        if (jobName) {
            abaqusRunner.submitJob(jobName)
                .then(result => {
                    window.showInformationMessage(`Job ${jobName} submitted successfully: ${result}`);
                })
                .catch(error => {
                    window.showErrorMessage(`Failed to submit job ${jobName}: ${error}`);
                });
        } else {
            window.showWarningMessage('Job name cannot be empty.');
        }
    });
}