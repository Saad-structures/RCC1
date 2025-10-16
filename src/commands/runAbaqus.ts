import { window, workspace } from 'vscode';
import { AbaqusRunner } from '../utils/abaqusRunner';

export async function runAbaqus() {
    const abaqusRunner = new AbaqusRunner();

    try {
        const jobFilePath = await window.showOpenDialog({
            canSelectMany: false,
            filters: {
                'Abaqus Job Files': ['inp'],
            },
        });

        if (!jobFilePath || jobFilePath.length === 0) {
            window.showErrorMessage('No job file selected.');
            return;
        }

        const result = await abaqusRunner.runJob(jobFilePath[0].fsPath);
        window.showInformationMessage(`Abaqus job completed with result: ${result}`);
    } catch (error) {
        window.showErrorMessage(`Error running Abaqus job: ${error.message}`);
    }
}