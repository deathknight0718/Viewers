/** @type {AppTypes.Config} */

window.config = {
  routerBasename: '/ohif/',
  extensions: [],
  modes: [],
  customizationService: {},
  showStudyList: true,
  maxNumberOfWebWorkers: 3,
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  experimentalStudyBrowserSort: false,
  strictZSpacingForVolumeViewport: true,
  groupEnabledModesFirst: true,
  maxNumRequests: { interaction: 100, thumbnail: 75, prefetch: 25 },
  defaultDataSourceName: 'orthanc01',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'orthanc01',
      configuration: {
        friendlyName: 'Foliage Orthanc 01',
        name: 'foliage-orthanc-01',
        wadoUriRoot: 'https://portal.cecdat.dev:9103/dicom-web',
        qidoRoot: 'https://portal.cecdat.dev:9103/dicom-web',
        wadoRoot: 'https://portal.cecdat.dev:9103/dicom-web',
        qidoSupportsIncludeField: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: false,
        supportsWildcard: true,
        staticWado: true,
        singlepart: 'bulkdata,video',
        bulkDataURI: { enabled: true, relativeResolution: 'studies' },
        omitQuotationForMultipartRequest: true,
      },
    },
  ],
};
