import { DataSet, DataSetInput, Mutation, Node, PageMeta, Parameter, ParameterInput, Pipeline, PipelineEvent, PipelineInput, PipelineLogMessage, PipelineTemplate, PipelineTemplates, Pipelines, Query, Subscription, Tag, TagInput, ParameterType } from './graphql';

export const aDataSet = (overrides?: Partial<DataSet>): DataSet => {
    return {
        config: overrides && overrides.hasOwnProperty('config') ? overrides.config! : 'fugiat',
        credentials: overrides && overrides.hasOwnProperty('credentials') ? overrides.credentials! : 'et',
        filepath: overrides && overrides.hasOwnProperty('filepath') ? overrides.filepath! : 'assumenda',
        loadArgs: overrides && overrides.hasOwnProperty('loadArgs') ? overrides.loadArgs! : [aParameter()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'nam',
        saveArgs: overrides && overrides.hasOwnProperty('saveArgs') ? overrides.saveArgs! : [aParameter()],
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'officiis',
    };
};

export const aDataSetInput = (overrides?: Partial<DataSetInput>): DataSetInput => {
    return {
        config: overrides && overrides.hasOwnProperty('config') ? overrides.config! : 'officiis',
        credentials: overrides && overrides.hasOwnProperty('credentials') ? overrides.credentials! : 'laborum',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'explicabo',
    };
};

export const aMutation = (overrides?: Partial<Mutation>): Mutation => {
    return {
        helloWorld: overrides && overrides.hasOwnProperty('helloWorld') ? overrides.helloWorld! : 'eum',
        pipeline: overrides && overrides.hasOwnProperty('pipeline') ? overrides.pipeline! : aPipeline(),
    };
};

export const aNode = (overrides?: Partial<Node>): Node => {
    return {
        inputs: overrides && overrides.hasOwnProperty('inputs') ? overrides.inputs! : ['porro'],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'perferendis',
        outputs: overrides && overrides.hasOwnProperty('outputs') ? overrides.outputs! : ['exercitationem'],
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : ['et'],
    };
};

export const aPageMeta = (overrides?: Partial<PageMeta>): PageMeta => {
    return {
        nextCursor: overrides && overrides.hasOwnProperty('nextCursor') ? overrides.nextCursor! : 'earum',
    };
};

export const aParameter = (overrides?: Partial<Parameter>): Parameter => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'facere',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ParameterType.Boolean,
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'assumenda',
    };
};

export const aParameterInput = (overrides?: Partial<ParameterInput>): ParameterInput => {
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'rerum',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : ParameterType.Boolean,
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'adipisci',
    };
};

export const aPipeline = (overrides?: Partial<Pipeline>): Pipeline => {
    return {
        dataCatalog: overrides && overrides.hasOwnProperty('dataCatalog') ? overrides.dataCatalog! : [aDataSet()],
        describe: overrides && overrides.hasOwnProperty('describe') ? overrides.describe! : 'minus',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'debitis',
        inputs: overrides && overrides.hasOwnProperty('inputs') ? overrides.inputs! : [aDataSet()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'veritatis',
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [aNode()],
        outputs: overrides && overrides.hasOwnProperty('outputs') ? overrides.outputs! : [aDataSet()],
        parameters: overrides && overrides.hasOwnProperty('parameters') ? overrides.parameters! : [aParameter()],
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'aut',
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : [aTag()],
        taskArgs: overrides && overrides.hasOwnProperty('taskArgs') ? overrides.taskArgs! : 'iste',
        taskEinfo: overrides && overrides.hasOwnProperty('taskEinfo') ? overrides.taskEinfo! : 'non',
        taskException: overrides && overrides.hasOwnProperty('taskException') ? overrides.taskException! : 'atque',
        taskId: overrides && overrides.hasOwnProperty('taskId') ? overrides.taskId! : 'consequatur',
        taskKwargs: overrides && overrides.hasOwnProperty('taskKwargs') ? overrides.taskKwargs! : 'quis',
        taskName: overrides && overrides.hasOwnProperty('taskName') ? overrides.taskName! : 'est',
        taskRequest: overrides && overrides.hasOwnProperty('taskRequest') ? overrides.taskRequest! : 'nesciunt',
        taskResult: overrides && overrides.hasOwnProperty('taskResult') ? overrides.taskResult! : 'eos',
        taskTraceback: overrides && overrides.hasOwnProperty('taskTraceback') ? overrides.taskTraceback! : 'sunt',
        template: overrides && overrides.hasOwnProperty('template') ? overrides.template! : aPipelineTemplate(),
    };
};

export const aPipelineEvent = (overrides?: Partial<PipelineEvent>): PipelineEvent => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'ad',
        result: overrides && overrides.hasOwnProperty('result') ? overrides.result! : 'et',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'debitis',
        taskId: overrides && overrides.hasOwnProperty('taskId') ? overrides.taskId! : 'nisi',
        timestamp: overrides && overrides.hasOwnProperty('timestamp') ? overrides.timestamp! : 'et',
        traceback: overrides && overrides.hasOwnProperty('traceback') ? overrides.traceback! : 'ea',
    };
};

export const aPipelineInput = (overrides?: Partial<PipelineInput>): PipelineInput => {
    return {
        dataCatalog: overrides && overrides.hasOwnProperty('dataCatalog') ? overrides.dataCatalog! : [aDataSetInput()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'enim',
        parameters: overrides && overrides.hasOwnProperty('parameters') ? overrides.parameters! : [aParameterInput()],
        tags: overrides && overrides.hasOwnProperty('tags') ? overrides.tags! : [aTagInput()],
    };
};

export const aPipelineLogMessage = (overrides?: Partial<PipelineLogMessage>): PipelineLogMessage => {
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'pariatur',
        message: overrides && overrides.hasOwnProperty('message') ? overrides.message! : 'aliquid',
        messageId: overrides && overrides.hasOwnProperty('messageId') ? overrides.messageId! : 'ratione',
        taskId: overrides && overrides.hasOwnProperty('taskId') ? overrides.taskId! : 'dolores',
        time: overrides && overrides.hasOwnProperty('time') ? overrides.time! : 'libero',
    };
};

export const aPipelineTemplate = (overrides?: Partial<PipelineTemplate>): PipelineTemplate => {
    return {
        describe: overrides && overrides.hasOwnProperty('describe') ? overrides.describe! : 'quam',
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'quae',
        inputs: overrides && overrides.hasOwnProperty('inputs') ? overrides.inputs! : [aDataSet()],
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'molestiae',
        nodes: overrides && overrides.hasOwnProperty('nodes') ? overrides.nodes! : [aNode()],
        outputs: overrides && overrides.hasOwnProperty('outputs') ? overrides.outputs! : [aDataSet()],
        parameters: overrides && overrides.hasOwnProperty('parameters') ? overrides.parameters! : [aParameter()],
    };
};

export const aPipelineTemplates = (overrides?: Partial<PipelineTemplates>): PipelineTemplates => {
    return {
        pageMeta: overrides && overrides.hasOwnProperty('pageMeta') ? overrides.pageMeta! : aPageMeta(),
        pipelineTemplates: overrides && overrides.hasOwnProperty('pipelineTemplates') ? overrides.pipelineTemplates! : [aPipelineTemplate()],
    };
};

export const aPipelines = (overrides?: Partial<Pipelines>): Pipelines => {
    return {
        pageMeta: overrides && overrides.hasOwnProperty('pageMeta') ? overrides.pageMeta! : aPageMeta(),
        pipelines: overrides && overrides.hasOwnProperty('pipelines') ? overrides.pipelines! : [aPipeline()],
    };
};

export const aQuery = (overrides?: Partial<Query>): Query => {
    return {
        helloWorld: overrides && overrides.hasOwnProperty('helloWorld') ? overrides.helloWorld! : 'quo',
        pipeline: overrides && overrides.hasOwnProperty('pipeline') ? overrides.pipeline! : aPipeline(),
        pipelineTemplate: overrides && overrides.hasOwnProperty('pipelineTemplate') ? overrides.pipelineTemplate! : aPipelineTemplate(),
        pipelineTemplates: overrides && overrides.hasOwnProperty('pipelineTemplates') ? overrides.pipelineTemplates! : aPipelineTemplates(),
        pipelines: overrides && overrides.hasOwnProperty('pipelines') ? overrides.pipelines! : aPipelines(),
    };
};

export const aSubscription = (overrides?: Partial<Subscription>): Subscription => {
    return {
        helloWorld: overrides && overrides.hasOwnProperty('helloWorld') ? overrides.helloWorld! : 'esse',
        pipeline: overrides && overrides.hasOwnProperty('pipeline') ? overrides.pipeline! : aPipelineEvent(),
        pipelineLogs: overrides && overrides.hasOwnProperty('pipelineLogs') ? overrides.pipelineLogs! : aPipelineLogMessage(),
    };
};

export const aTag = (overrides?: Partial<Tag>): Tag => {
    return {
        key: overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'et',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'culpa',
    };
};

export const aTagInput = (overrides?: Partial<TagInput>): TagInput => {
    return {
        key: overrides && overrides.hasOwnProperty('key') ? overrides.key! : 'ut',
        value: overrides && overrides.hasOwnProperty('value') ? overrides.value! : 'nostrum',
    };
};
