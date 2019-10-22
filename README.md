# firestorebl

A command-line tool to help you to load data to Google Cloud Firestore.

## How to install

```bash
npm i -g firestorebl
```

## How to use

**To get the version**

```bash
firestorebl --version
```

**How to get help**

```bash
firestorebl --help
```

**How to load data to Firestore**

```bash
firestorebl -f ./path/to/data.json -s ./path/to/service-account.json
```

## Parameters

| Property         | Description                              | Default                | Required?         |
|------------------|------------------------------------------|------------------------|-------------------|
| -V --version     | output the version number                | -                      | No                |
| -c --collection  | the collection name                      | bulkloader_\<timestamp\> | No                |
| -f --file        | the file to be imported                  | -                      | Yes               |
| -i --id          | attribute name to use as a document ID   | -                      | No                |
| -s --secret      | the service account file (JSON)          | -                      | Yes               |
| -h --help        | output usage information                 | -                      | No                |

- If no collection name was informed the tool will create a default collection name in the format 'format bulkload_\<timestamp\>'. Example:

```bash
bulkloader_1571683311550
```

## Creating a service account

1. In the GCP Console, go to the [Create service account key page](https://console.cloud.google.com/apis/credentials/serviceaccountkey?_ga=2.53555115.-20616629.1570127622&_gac=1.216335906.1570580812.EAIaIQobChMI9sTd3vON5QIVQQmRCh0ocQR2EAAYASAAEgL7_PD_BwE).
2. From the Service account list, select New service account.
3. In the Service account name field, enter a name.
4. From the Role list, select Project > Owner.

## Contributors
[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/0)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/0)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/1)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/1)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/2)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/2)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/3)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/3)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/4)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/4)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/5)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/5)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/6)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/6)[![](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/images/7)](https://sourcerer.io/fame/marcosvidolin/marcosvidolin/firestorebl/links/7)
