export const mockRes = {
    sectionData: [{
        'display': '{\'name\':{\'en\':\'Ongoing Courses\'}}',
        'alt': null,
        'count': 2,
        'description': null,
        'index': 1,
        'sectionDataType': 'coursebatch',
        'imgUrl': null,
        'contents': [{
            'identifier': '0130206984449556485',
            'createdFor': ['01285019302823526477', 'ORG_001'],
            'endDate': '2020-05-15',
            'description': 'test',
            'updatedDate': '2020-05-14 07:34:30:796+0000',
            'batchId': '0130206984449556485',
            'createdDate': '2020-05-14 07:16:05:013+0000',
            'createdBy': 'fd4227f7-9de8-40b4-af82-edb8cbd14fb1',
            'mentors': ['a41dc769-882a-4d93-b7b8-5cfcff1becfe', '7dc801f2-a9aa-4561-ba93-b7b31696efd1'],
            'name': '14th may batch 5',
            'id': '0130206984449556485',
            'enrollmentType': 'open',
            'courseId': 'do_1130206856421867521137',
            'enrollmentEndDate': '2020-05-15',
            'startDate': '2020-05-14',
            'status': 1
        }],
        'searchQuery': '{\'request\':{\'query\':\'\',\'filters\':{\'status\':\'1\'},\'limit\':10,\'sort_by\':{\'createdDate\':\'desc\'}}}',
        'name': 'Ongoing Course',
        'id': '0127029938411765763',
        'dynamicFilters': null,
        'dataSource': 'batch',
        'group': 1
    }],
    courseDetails: {
        'id': 'api.content.search',
        'ver': '1.0',
        'ts': '2020-05-14T12:45:20.401Z',
        'params': {
            'resmsgid': 'c5536010-95e0-11ea-b062-a3f599b7b162',
            'msgid': 'ff5f7017-2a0a-844e-26f4-2797f286bb77',
            'status': 'successful',
            'err': null,
            'errmsg': null
        },
        'responseCode': 'OK',
        'result': {
            'count': 1,
            'content': [{
                'identifier': 'do_1130206856421867521137',
                'name': '14th may live curriculaum'
            }]
        }
    },
    updatedBatchList: [{
        'identifier': '0130206984449556485',
        'createdFor': ['01285019302823526477', 'ORG_001'],
        'endDate': '2020-05-15',
        'description': 'test',
        'updatedDate': '2020-05-14 07:34:30:796+0000',
        'batchId': '0130206984449556485',
        'createdDate': '2020-05-14 07:16:05:013+0000',
        'createdBy': 'fd4227f7-9de8-40b4-af82-edb8cbd14fb1',
        'mentors': ['a41dc769-882a-4d93-b7b8-5cfcff1becfe', '7dc801f2-a9aa-4561-ba93-b7b31696efd1'],
        'name': '14th may batch 5',
        'id': '0130206984449556485',
        'enrollmentType': 'open',
        'courseId': 'do_1130206856421867521137',
        'enrollmentEndDate': '2020-05-15',
        'startDate': '2020-05-14',
        'status': 1,
        'courseDetails': {
            'identifier': 'do_1130206856421867521137',
            'name': '14th may live curriculaum'
        }
    }],
    successData: {
        'id': '0122838911932661768',
        'name': 'Course',
        'sections': [
            {
                'name': 'Multiple Data',
                'length': 1,
                'contents': [{
                    'createdBy': '97255811-5486-4f01-bad1-36138d0f5b8a',
                    'userName': '',
                     'name': 'Test1182016-02',
                    'description': 'Test',
                    'rating': 3,
                    'identifier': 'do_2123412199319552001265'
            }]
        }]
    },
    userSuccess: {
        error: {
            'id': 'api.user.read',
            'ver': 'v1',
            'ts': '2018-02-28 12:07:33:518+0000',
            'params': {
                'resmsgid': null,
                'msgid': 'bdf695fd-3916-adb0-2072-1d53deb14aea',
                'err': null,
                'status': 'error',
                'errmsg': null
            },
            'responseCode': 'CLINTERROR',
            'result': {}
        },
        success: {
            'id': 'api.user.read',
            'ver': 'v1',
            'ts': '2018-02-28 12:07:33:518+0000',
            'params': {
                'resmsgid': null,
                'msgid': 'bdf695fd-3916-adb0-2072-1d53deb14aea',
                'err': null,
                'status': 'success',
                'errmsg': null
            },
            'responseCode': 'OK',
            'result': {
                'response': {
                    'missingFields': [
                        'dob',
                        'location'
                    ],
                    'lastName': 'User',
                    'webPages': [
                        {
                            'type': 'fb',
                            'url': 'https://www.facebook.com/gjh'
                        }
                    ],
                    'tcStatus': null,
                    'loginId': 'ntptest102',
                    'education': [
                        {
                            'updatedBy': null,
                            'yearOfPassing': 0,
                            'degree': 'hhj',
                            'updatedDate': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressId': null,
                            'duration': null,
                            'courseName': null,
                            'createdDate': '2017-11-30 13:19:47:276+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardOrUniversity': '',
                            'grade': '',
                            'percentage': null,
                            'name': 'g',
                            'id': '0123867019537448963'
                        },
                        {
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'yearOfPassing': 2000,
                            'degree': 'ahd',
                            'updatedDate': '2017-12-06 13:52:13:291+0000',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressId': null,
                            'duration': null,
                            'courseName': null,
                            'createdDate': '2017-12-06 13:50:59:915+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardOrUniversity': '',
                            'grade': 'F',
                            'percentage': 999,
                            'name': 'djd',
                            'id': '0123909651904757763'
                        }
                    ],
                    'gender': 'female',
                    'regOrgId': '0123653943740170242',
                    'subject': [
                        'Gujarati',
                        'Kannada'
                    ],
                    'roles': [
                        'public'
                    ],
                    'language': [
                        'Bengali'
                    ],
                    'updatedDate': '2018-02-21 08:54:46:436+0000',
                    'completeness': 88,
                    'skills': [
                        {
                            'skillName': 'bnn',
                            'addedAt': '2018-02-17',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-02-17',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'f2f8f18e45d2ede1eb93f40dd53e11290814fd5999d056181d919f219c9fda03',
                            'skillNameToLowercase': 'bnn',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'as',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '8ef363f359f68c7db0e1422f29e97632229d2ce92ad95cbd2525b068f8cbc2cf',
                            'skillNameToLowercase': 'as',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'java',
                            'addedAt': '2017-11-19',
                            'endorsersList': [
                                {
                                    'endorseDate': '2017-11-19',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '9f96b0187dff50353a1ca9bb5177324f61d6c725fe7f050938b0c530ad2d82d8',
                            'skillNameToLowercase': 'java',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'kafka123',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'abefe2638ec556faad62ca18d9214e8175584e87ff70c27e566c74727789790f',
                            'skillNameToLowercase': 'kafka123',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'asllfhsal',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'e00543bb0c0fc0822136eaf17223be0d7c2fc8f4b5f5c2a0a2c902c5aaed4a1f',
                            'skillNameToLowercase': 'asllfhsal',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'purescript',
                            'addedAt': '2017-11-17',
                            'endorsersList': [
                                {
                                    'endorseDate': '2017-11-17',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'ee5c047f3b2f552f7cd31dffefc87bdcd34d9adac9a44ed79e44498136ff821d',
                            'skillNameToLowercase': 'purescript',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'angular',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '65fc8fb2cc0f5a54f30d3fe412631184820abc73a390ee66bea000680af2b0ff',
                            'skillNameToLowercase': 'angular',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'graph database - neo4g',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '5bdf5759b63e106897a22ce960fdeca108da759e105d25cf2ccb0fb8e8fb54b8',
                            'skillNameToLowercase': 'graph database - neo4g',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'kafka',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '17759f5c8024ab470190c2b2da1554ed693a2a5d93aba9bcc27c42889146eaea',
                            'skillNameToLowercase': 'kafka',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'apis design',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'a05fc5f9e82344b4adbc8b5a51b10f7133946667e1724bf7df1705e8b8c1e462',
                            'skillNameToLowercase': 'apis design',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'asflashf',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '0f419edad82dd10f6d49b0f38622a12365a8ce8356100004fa4aa17352b7a32f',
                            'skillNameToLowercase': 'asflashf',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'asfajsfh',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '50985029eea591602cc64e243ceb2679688639fe5f3cdccde79eb94248dfc303',
                            'skillNameToLowercase': 'asfajsfh',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'akka',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '8f8ced5c48869be76c3fde50be6221a7cd34ddae4887959f612ddb3e7ba34ed9',
                            'skillNameToLowercase': 'akka',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'test',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'cdbfc1812b172e1362e384bdd42ea13360333d8ad6140064a5a81d8ec3d72002',
                            'skillNameToLowercase': 'test',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'afjalskf',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '28acdc61a6865a2cf571083dbc50684878f718efde54502c12e0b02c729a932b',
                            'skillNameToLowercase': 'afjalskf',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'cassandra',
                            'addedAt': '2017-11-19',
                            'endorsersList': [
                                {
                                    'endorseDate': '2017-11-19',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '54b258bb673e38b7159de94a3746ab60f232535364ee05bce0d91bcc215236d7',
                            'skillNameToLowercase': 'cassandra',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        }
                    ],
                    'isDeleted': null,
                    'organisations': [
                        {
                            'organisationId': '0123653943740170242',
                            'updatedBy': null,
                            'addedByName': null,
                            'addedBy': null,
                            'roles': [
                                'CONTENT_CREATION',
                                'PUBLIC'
                            ],
                            'approvedBy': null,
                            'updatedDate': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'approvaldate': null,
                            'isDeleted': false,
                            'isRejected': null,
                            'id': '01236539426110668816',
                            'position': 'ASD',
                            'isApproved': null,
                            'orgjoindate': '2017-10-31 10:47:04:732+0000',
                            'orgLeftDate': null
                        }
                    ],
                    'provider': null,
                    'countryCode': null,
                    'id': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'tempPassword': null,
                    'email': 'us********@testss.com',
                    'rootOrg': {
                        'dateTime': null,
                        'preferredLanguage': 'English',
                        'approvedBy': null,
                        'channel': 'ROOT_ORG',
                        'description': 'Sunbird',
                        'updatedDate': '2017-08-24 06:02:10:846+0000',
                        'addressId': null,
                        'orgType': null,
                        'provider': null,
                        'orgCode': 'sunbird',
                        'theme': null,
                        'id': 'ORG_001',
                        'communityId': null,
                        'isApproved': null,
                        'slug': 'sunbird',
                        'identifier': 'ORG_001',
                        'thumbnail': null,
                        'orgName': 'Sunbird',
                        'updatedBy': 'user1',
                        'externalId': null,
                        'isRootOrg': true,
                        'rootOrgId': null,
                        'approvedDate': null,
                        'imgUrl': null,
                        'homeUrl': null,
                        'isDefault': null,
                        'contactDetail':
                        '[{\'phone\':\'213124234234\',\'email\':\'test@test.com\'}]',
                        'createdDate': null,
                        'createdBy': null,
                        'parentOrgId': null,
                        'hashTagId': 'b00bc992ef25f1a9a8d63291e20efc8d',
                        'noOfMembers': 1,
                        'status': null
                    },
                    'identifier': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'profileVisibility': {
                        'skills': 'private',
                        'address': 'private',
                        'profileSummary': 'private'
                    },
                    'thumbnail': null,
                    'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'address': [
                        {
                            'country': 'dsfg',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'city': 'dsf',
                            'updatedDate': '2018-02-21 08:54:46:451+0000',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'zipcode': '560015',
                            'addType': 'current',
                            'createdDate': '2018-01-28 17:31:11:677+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressLine1': 'sadf',
                            'addressLine2': 'sdf',
                            'id': '01242858643843481618',
                            'state': 'dsfff'
                        },
                        {
                            'country': 'zxc',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'city': 'dszfx',
                            'updatedDate': '2018-02-21 08:54:46:515+0000',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'zipcode': '560017',
                            'addType': 'current',
                            'createdDate': '2018-01-28 17:30:35:711+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressLine1': 'sdsf',
                            'addressLine2': 'sdf',
                            'id': '01242858632795750422',
                            'state': 'ds'
                        }
                    ],
                    'jobProfile': [
                        {
                            'jobName': 'hhH',
                            'orgName': 'hhh',
                            'role': 'bnmnghbgg',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endDate': null,
                            'isVerified': null,
                            'subject': [
                                'Assamese'
                            ],
                            'joiningDate': '2017-10-19',
                            'updatedDate': '2018-02-21 08:49:05:880+0000',
                            'isCurrentJob': false,
                            'verifiedBy': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardName': null,
                            'orgId': null,
                            'addressId': null,
                            'createdDate': '2017-12-06 16:15:28:684+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'verifiedDate': null,
                            'isRejected': null,
                            'id': '01239103162216448010'
                        },
                        {
                            'jobName': 'dcv',
                            'orgName': 'dsf',
                            'role': 'dfgdd',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endDate': null,
                            'isVerified': null,
                            'subject': [
                                'Bengali'
                            ],
                            'joiningDate': '2018-02-06',
                            'updatedDate': '2018-02-21 08:49:05:886+0000',
                            'isCurrentJob': false,
                            'verifiedBy': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardName': null,
                            'orgId': null,
                            'addressId': null,
                            'createdDate': '2018-02-18 05:47:58:561+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'verifiedDate': null,
                            'isRejected': null,
                            'id': '0124430985025290242'
                        }
                    ],
                    'profileSummary': 'asdd',
                    'tcUpdatedDate': null,
                    'avatar':
                    'https://sunbirddev.blob.core.windows.net/user/874ed8a5-782e-4f6c-8f36-e0288455901e/File-01242833565242982418.png',
                    'userName': 'ntptest102',
                    'rootOrgId': 'ORG_001',
                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'emailVerified': null,
                    'firstName': 'Cretation',
                    'lastLoginTime': 1519809987692,
                    'createdDate': '2017-10-31 10:47:04:723+0000',
                    'createdBy': '5d7eb482-c2b8-4432-bf38-cc58f3c23b45',
                    'phone': '******4412',
                    'dob': null,
                    'registeredOrg': {
                        'dateTime': null,
                        'preferredLanguage': null,
                        'approvedBy': null,
                        'channel': null,
                        'description': null,
                        'updatedDate': '2017-11-17 09:00:59:342+0000',
                        'addressId': null,
                        'orgType': null,
                        'provider': null,
                        'orgCode': null,
                        'locationId': '0123668622585610242',
                        'theme': null,
                        'id': '0123653943740170242',
                        'communityId': null,
                        'isApproved': null,
                        'slug': null,
                        'identifier': '0123653943740170242',
                        'thumbnail': null,
                        'orgName': 'QA ORG',
                        'updatedBy': '159e93d1-da0c-4231-be94-e75b0c226d7c',
                        'externalId': null,
                        'isRootOrg': false,
                        'rootOrgId': 'ORG_001',
                        'approvedDate': null,
                        'imgUrl': null,
                        'homeUrl': null,
                        'orgTypeId': null,
                        'isDefault': null,
                        'contactDetail': [],
                        'createdDate': '2017-10-31 10:43:48:600+0000',
                        'createdBy': null,
                        'parentOrgId': null,
                        'hashTagId': '0123653943740170242',
                        'noOfMembers': null,
                        'status': 1
                    },
                    'grade': [
                        'Grade 2'
                    ],
                    'currentLoginTime': null,
                    'location': '',
                    'status': 1
                }
            }
        },
        rootOrgSuccess: {
            'id': 'api.user.read',
            'ver': 'v1',
            'ts': '2018-02-28 12:07:33:518+0000',
            'params': {
                'resmsgid': null,
                'msgid': 'bdf695fd-3916-adb0-2072-1d53deb14aea',
                'err': null,
                'status': 'success',
                'errmsg': null
            },
            'responseCode': 'OK',
            'result': {
                'response': {
                    'missingFields': [
                        'dob',
                        'location'
                    ],
                    'lastName': 'User',
                    'webPages': [
                        {
                            'type': 'fb',
                            'url': 'https://www.facebook.com/gjh'
                        }
                    ],
                    'tcStatus': null,
                    'loginId': 'ntptest102',
                    'education': [
                        {
                            'updatedBy': null,
                            'yearOfPassing': 0,
                            'degree': 'hhj',
                            'updatedDate': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressId': null,
                            'duration': null,
                            'courseName': null,
                            'createdDate': '2017-11-30 13:19:47:276+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardOrUniversity': '',
                            'grade': '',
                            'percentage': null,
                            'name': 'g',
                            'id': '0123867019537448963'
                        },
                        {
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'yearOfPassing': 2000,
                            'degree': 'ahd',
                            'updatedDate': '2017-12-06 13:52:13:291+0000',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressId': null,
                            'duration': null,
                            'courseName': null,
                            'createdDate': '2017-12-06 13:50:59:915+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardOrUniversity': '',
                            'grade': 'F',
                            'percentage': 999,
                            'name': 'djd',
                            'id': '0123909651904757763'
                        }
                    ],
                    'gender': 'female',
                    'regOrgId': '0123653943740170242',
                    'subject': [
                        'Gujarati',
                        'Kannada'
                    ],
                    'roles': [
                        'public',
                        'ORG_ADMIN',
                        'SYSTEM_ADMINISTRATION'
                    ],
                    'language': [
                        'Bengali'
                    ],
                    'updatedDate': '2018-02-21 08:54:46:436+0000',
                    'completeness': 88,
                    'skills': [
                        {
                            'skillName': 'bnn',
                            'addedAt': '2018-02-17',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-02-17',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'f2f8f18e45d2ede1eb93f40dd53e11290814fd5999d056181d919f219c9fda03',
                            'skillNameToLowercase': 'bnn',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'as',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '8ef363f359f68c7db0e1422f29e97632229d2ce92ad95cbd2525b068f8cbc2cf',
                            'skillNameToLowercase': 'as',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'java',
                            'addedAt': '2017-11-19',
                            'endorsersList': [
                                {
                                    'endorseDate': '2017-11-19',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '9f96b0187dff50353a1ca9bb5177324f61d6c725fe7f050938b0c530ad2d82d8',
                            'skillNameToLowercase': 'java',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'kafka123',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'abefe2638ec556faad62ca18d9214e8175584e87ff70c27e566c74727789790f',
                            'skillNameToLowercase': 'kafka123',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'asllfhsal',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'e00543bb0c0fc0822136eaf17223be0d7c2fc8f4b5f5c2a0a2c902c5aaed4a1f',
                            'skillNameToLowercase': 'asllfhsal',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'purescript',
                            'addedAt': '2017-11-17',
                            'endorsersList': [
                                {
                                    'endorseDate': '2017-11-17',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'ee5c047f3b2f552f7cd31dffefc87bdcd34d9adac9a44ed79e44498136ff821d',
                            'skillNameToLowercase': 'purescript',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'angular',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '65fc8fb2cc0f5a54f30d3fe412631184820abc73a390ee66bea000680af2b0ff',
                            'skillNameToLowercase': 'angular',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'graph database - neo4g',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '5bdf5759b63e106897a22ce960fdeca108da759e105d25cf2ccb0fb8e8fb54b8',
                            'skillNameToLowercase': 'graph database - neo4g',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'kafka',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '17759f5c8024ab470190c2b2da1554ed693a2a5d93aba9bcc27c42889146eaea',
                            'skillNameToLowercase': 'kafka',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'apis design',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'a05fc5f9e82344b4adbc8b5a51b10f7133946667e1724bf7df1705e8b8c1e462',
                            'skillNameToLowercase': 'apis design',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'asflashf',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '0f419edad82dd10f6d49b0f38622a12365a8ce8356100004fa4aa17352b7a32f',
                            'skillNameToLowercase': 'asflashf',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'asfajsfh',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '50985029eea591602cc64e243ceb2679688639fe5f3cdccde79eb94248dfc303',
                            'skillNameToLowercase': 'asfajsfh',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'akka',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '8f8ced5c48869be76c3fde50be6221a7cd34ddae4887959f612ddb3e7ba34ed9',
                            'skillNameToLowercase': 'akka',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'test',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': 'cdbfc1812b172e1362e384bdd42ea13360333d8ad6140064a5a81d8ec3d72002',
                            'skillNameToLowercase': 'test',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'afjalskf',
                            'addedAt': '2018-01-28',
                            'endorsersList': [
                                {
                                    'endorseDate': '2018-01-28',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '28acdc61a6865a2cf571083dbc50684878f718efde54502c12e0b02c729a932b',
                            'skillNameToLowercase': 'afjalskf',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        },
                        {
                            'skillName': 'cassandra',
                            'addedAt': '2017-11-19',
                            'endorsersList': [
                                {
                                    'endorseDate': '2017-11-19',
                                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                                }
                            ],
                            'addedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endorsementcount': 0,
                            'id': '54b258bb673e38b7159de94a3746ab60f232535364ee05bce0d91bcc215236d7',
                            'skillNameToLowercase': 'cassandra',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e'
                        }
                    ],
                    'isDeleted': null,
                    'organisations': [
                        {
                            'organisationId': 'ORG_001',
                            'updatedBy': null,
                            'addedByName': null,
                            'addedBy': null,
                            'roles': [
                                'CONTENT_CREATION',
                                'PUBLIC',
                                'ORG_ADMIN'
                            ],
                            'approvedBy': null,
                            'updatedDate': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'approvaldate': null,
                            'isDeleted': false,
                            'isRejected': null,
                            'id': '01236539426110668816',
                            'position': 'ASD',
                            'isApproved': null,
                            'orgjoindate': '2017-10-31 10:47:04:732+0000',
                            'orgLeftDate': null
                        }
                    ],
                    'provider': null,
                    'countryCode': null,
                    'id': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'tempPassword': null,
                    'email': 'us********@testss.com',
                    'rootOrg': {
                        'dateTime': null,
                        'preferredLanguage': 'English',
                        'approvedBy': null,
                        'channel': 'ROOT_ORG',
                        'description': 'Sunbird',
                        'updatedDate': '2017-08-24 06:02:10:846+0000',
                        'addressId': null,
                        'orgType': null,
                        'provider': null,
                        'orgCode': 'sunbird',
                        'theme': null,
                        'id': 'ORG_001',
                        'communityId': null,
                        'isApproved': null,
                        'slug': 'sunbird',
                        'identifier': 'ORG_001',
                        'thumbnail': null,
                        'orgName': 'Sunbird',
                        'updatedBy': 'user1',
                        'externalId': null,
                        'isRootOrg': true,
                        'rootOrgId': null,
                        'approvedDate': null,
                        'imgUrl': null,
                        'homeUrl': null,
                        'isDefault': null,
                        'contactDetail':
                        '[{\'phone\':\'213124234234\',\'email\':\'test@test.com\'}]',
                        'createdDate': null,
                        'createdBy': null,
                        'parentOrgId': null,
                        'hashTagId': 'b00bc992ef25f1a9a8d63291e20efc8d',
                        'noOfMembers': 1,
                        'status': null
                    },
                    'identifier': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'profileVisibility': {
                        'skills': 'private',
                        'address': 'private',
                        'profileSummary': 'private'
                    },
                    'thumbnail': null,
                    'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'address': [
                        {
                            'country': 'dsfg',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'city': 'dsf',
                            'updatedDate': '2018-02-21 08:54:46:451+0000',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'zipcode': '560015',
                            'addType': 'current',
                            'createdDate': '2018-01-28 17:31:11:677+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressLine1': 'sadf',
                            'addressLine2': 'sdf',
                            'id': '01242858643843481618',
                            'state': 'dsfff'
                        },
                        {
                            'country': 'zxc',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'city': 'dszfx',
                            'updatedDate': '2018-02-21 08:54:46:515+0000',
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'zipcode': '560017',
                            'addType': 'current',
                            'createdDate': '2018-01-28 17:30:35:711+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'addressLine1': 'sdsf',
                            'addressLine2': 'sdf',
                            'id': '01242858632795750422',
                            'state': 'ds'
                        }
                    ],
                    'jobProfile': [
                        {
                            'jobName': 'hhH',
                            'orgName': 'hhh',
                            'role': 'bnmnghbgg',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endDate': null,
                            'isVerified': null,
                            'subject': [
                                'Assamese'
                            ],
                            'joiningDate': '2017-10-19',
                            'updatedDate': '2018-02-21 08:49:05:880+0000',
                            'isCurrentJob': false,
                            'verifiedBy': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardName': null,
                            'orgId': null,
                            'addressId': null,
                            'createdDate': '2017-12-06 16:15:28:684+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'verifiedDate': null,
                            'isRejected': null,
                            'id': '01239103162216448010'
                        },
                        {
                            'jobName': 'dcv',
                            'orgName': 'dsf',
                            'role': 'dfgdd',
                            'updatedBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'endDate': null,
                            'isVerified': null,
                            'subject': [
                                'Bengali'
                            ],
                            'joiningDate': '2018-02-06',
                            'updatedDate': '2018-02-21 08:49:05:886+0000',
                            'isCurrentJob': false,
                            'verifiedBy': null,
                            'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'boardName': null,
                            'orgId': null,
                            'addressId': null,
                            'createdDate': '2018-02-18 05:47:58:561+0000',
                            'isDeleted': null,
                            'createdBy': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                            'verifiedDate': null,
                            'isRejected': null,
                            'id': '0124430985025290242'
                        }
                    ],
                    'profileSummary': 'asdd',
                    'tcUpdatedDate': null,
                    'avatar':
                    'https://sunbirddev.blob.core.windows.net/user/874ed8a5-782e-4f6c-8f36-e0288455901e/File-01242833565242982418.png',
                    'userName': 'ntptest102',
                    'rootOrgId': 'ORG_001',
                    'userId': '874ed8a5-782e-4f6c-8f36-e0288455901e',
                    'emailVerified': null,
                    'firstName': 'Cretation',
                    'lastLoginTime': 1519809987692,
                    'createdDate': '2017-10-31 10:47:04:723+0000',
                    'createdBy': '5d7eb482-c2b8-4432-bf38-cc58f3c23b45',
                    'phone': '******4412',
                    'dob': null,
                    'registeredOrg': {
                        'dateTime': null,
                        'preferredLanguage': null,
                        'approvedBy': null,
                        'channel': null,
                        'description': null,
                        'updatedDate': '2017-11-17 09:00:59:342+0000',
                        'addressId': null,
                        'orgType': null,
                        'provider': null,
                        'orgCode': null,
                        'locationId': '0123668622585610242',
                        'theme': null,
                        'id': '0123653943740170242',
                        'communityId': null,
                        'isApproved': null,
                        'slug': null,
                        'identifier': '0123653943740170242',
                        'thumbnail': null,
                        'orgName': 'QA ORG',
                        'updatedBy': '159e93d1-da0c-4231-be94-e75b0c226d7c',
                        'externalId': null,
                        'isRootOrg': false,
                        'rootOrgId': 'ORG_001',
                        'approvedDate': null,
                        'imgUrl': null,
                        'homeUrl': null,
                        'orgTypeId': null,
                        'isDefault': null,
                        'contactDetail': [],
                        'createdDate': '2017-10-31 10:43:48:600+0000',
                        'createdBy': null,
                        'parentOrgId': null,
                        'hashTagId': '0123653943740170242',
                        'noOfMembers': null,
                        'status': 1
                    },
                    'grade': [
                        'Grade 2'
                    ],
                    'currentLoginTime': null,
                    'location': '',
                    'status': 1
                }
            }
        }
    },
    searchSuccessWithCountTwo: {
        'id': 'api.v1.search',
        'responseCode': 'OK',
        'result': {
            'response': {
                'count': 65,
                'content': [{
                    'identifier': 'do_2124339707713126401772',
                    'name': 'Test_Collection_19_mar_2018_20001'
                }, {
                    'identifier': 'do_2124339707713126401772',
                    'name': 'Untitled Course'
                }]
            }
        }
    },
    searchSuccessWithCountZero: {
        'id': 'api.v1.search',
        'responseCode': 'OK',
        'result': {
            'response': {
                'count': 65,
                'content': []
            }
        }
    },
    pager: {
        'totalItems': 72, 'currentPage': 3, 'pageSize': 9, 'totalPages': 8,
        'startPage': 1, 'endPage': 8, 'startIndex': 1, 'endIndex': 72, 'pages': [1, 2, 3, 4, 5]
    },
    userlist: {
        'id': 'api.user.search',
        'ver': 'v1',
        'ts': '2018-07-03 09:05:24:123+0000',
        'params': {
            'resmsgid': null,
            'msgid': null,
            'err': null,
            'status': 'success',
            'errmsg': null
        },
        'responseCode': 'OK',
        'result': {
            'response': {
                'count': 1,
                'content': [
                    {
                        'lastName': 'User',
                        'webPages': [],
                        'tcStatus': null,
                        'education': [],
                        'gender': null,
                        'subject': [],
                        'roles': [
                            'public'
                        ],
                        'channel': null,
                        'language': [],
                        'updatedDate': '2018-05-28 08:27:08:739+0000',
                        'skills': [],
                        'badgeAssertions': [],
                        'isDeleted': null,
                        'organisations': [
                            {
                                'organisationId': '0123653943740170242',
                                'updatedBy': null,
                                'addedByName': null,
                                'addedBy': null,
                                'roles': [
                                    'COURSE_MENTOR',
                                    'PUBLIC'
                                ],
                                'approvedBy': null,
                                'updatedDate': null,
                                'userId': '97255811-5486-4f01-bad1-36138d0f5b8a',
                                'approvaldate': null,
                                'isDeleted': false,
                                'isRejected': null,
                                'id': '01236539303387955231',
                                'position': 'ASD',
                                'isApproved': null,
                                'orgjoindate': '2017-10-31 10:47:05:805+0000',
                                'orgLeftDate': null
                            }
                        ],
                        'countryCode': '+91',
                        'id': '97255811-5486-4f01-bad1-36138d0f5b8a',
                        'tempPassword': null,
                        'email': 'us********@testss.com',
                        'phoneverified': null,
                        'identifier': '97255811-5486-4f01-bad1-36138d0f5b8a',
                        'thumbnail': null,
                        'address': [],
                        'jobProfile': [
                            {
                                'jobName': 'sse',
                                'orgName': 'comp',
                                'role': 'sse',
                                'updatedBy': null,
                                'endDate': null,
                                'isVerified': null,
                                'subject': [
                                    'Hindi'
                                ],
                                'joiningDate': '2018-05-01',
                                'updatedDate': null,
                                'isCurrentJob': true,
                                'verifiedBy': null,
                                'userId': '97255811-5486-4f01-bad1-36138d0f5b8a',
                                'boardName': null,
                                'orgId': null,
                                'addressId': null,
                                'createdDate': '2018-05-28 08:27:08:746+0000',
                                'isDeleted': null,
                                'createdBy': '97255811-5486-4f01-bad1-36138d0f5b8a',
                                'verifiedDate': null,
                                'isRejected': null,
                                'id': '01251325407320473610'
                            }
                        ],
                        'profileSummary': null,
                        'tcUpdatedDate': null,
                        'avatar': null,
                        'rootOrgId': 'ORG_001',
                        'emailVerified': null,
                        'firstName': 'Mentor Second',
                        'lastLoginTime': null,
                        'createdDate': '2017-10-31 10:47:05:793+0000',
                        'createdBy': '5d7eb482-c2b8-4432-bf38-cc58f3c23b45',
                        'phone': '******7418',
                        'dob': null,
                        'grade': [],
                        'currentLoginTime': null,
                        'location': null,
                        'status': 1
                    }
                ]
            }
        }
    },
    event: {
        'inview': [
            {
                'id': 0,
                'data': {
                    'name': 'Aman15thMay Book',
                    'image': `https://ekstep-public-dev.s3-ap-south-1.amazonaws.com/content/do_1125041330714050561226
                    /artifact/4272f16cf3fd329b18dd116315601ad0_1476257845556.thumb.jpeg`,
                    'description': `Untitled Collection sadasd asd asd as`,
                    'action': {
                        'right': {
                            'class': 'trash large icon',
                            'eventName': 'delete',
                            'displayType': 'icon'
                        },
                        'onImage': {
                            'eventName': 'onImage'
                        }
                    },
                    'ribbon': {
                        'right': {
                            'name': 'TextBook',
                            'class': 'ui black right ribbon label'
                        }
                    },
                    'metaData': {
                        'identifier': 'do_1125041330714050561226',
                        'mimeType': 'application / vnd.ekstep.content - collection',
                        'framework': 'NCF',
                        'contentType': 'TextBook'
                    }
                }
            },
            {
                'id': 1,
                'data': {
                    'name': 'Untitled Collection',
                    'description': 'Untitled Collection',
                    'action': {
                        'right': {
                            'class': 'trash large icon',
                            'eventName': 'delete',
                            'displayType': 'icon'
                        },
                        'onImage': {
                            'eventName': 'onImage'
                        }
                    },
                    'ribbon': {
                        'right': {
                            'name': 'Resource',
                            'class': 'ui black right ribbon label'
                        }
                    },
                    'metaData': {
                        'identifier': 'do_112514006444826624126',
                        'mimeType': 'application / vnd.ekstep.ecml - archive',
                        'framework': 'NCF',
                        'contentType': 'Resource'
                    }
                }
            }]
    },
    telemetryData: {
        context: {
            env: 'workspace'
        },
        edata: {
            type: 'list',
            pageid: '',
            subtype: 'scroll',
            uri: '',
            visits: []
        }
    },
    updateBatchlist: [
        {identifier: 'do_2124339707713126401772',
        name: 'Test_Collection_19_mar_2018_20001',
        label: 0, userName: undefined},
        {identifier: 'do_2124339707713126401772', name: 'Untitled Course', label: 0, userName: undefined}
    ],
    searchUserlistWithZero: {
        'id': 'api.user.search',
        'ver': 'v1',
        'ts': '2018-07-03 09:05:24:123+0000',
        'params': {
            'resmsgid': null,
            'msgid': null,
            'err': null,
            'status': 'success',
            'errmsg': null
        },
        'responseCode': 'OK',
        'result': {
            'response': {
                'count': 0,
            }
        }
    }
};
