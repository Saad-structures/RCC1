import * as vscode from 'vscode';
import { runAbaqus } from './commands/runAbaqus';
import { submitJob } from './commands/submitJob';
import { parseResults } from './commands/parseResults';

export function activate(context: vscode.ExtensionContext) {
    const runAbaqusCommand = vscode.commands.registerCommand('extension.runAbaqus', runAbaqus);
    const submitJobCommand = vscode.commands.registerCommand('extension.submitJob', submitJob);
    const parseResultsCommand = vscode.commands.registerCommand('extension.parseResults', parseResults);

    context.subscriptions.push(runAbaqusCommand);
    context.subscriptions.push(submitJobCommand);
    context.subscriptions.push(parseResultsCommand);
}

export function deactivate() {}