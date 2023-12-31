define("Ndos_RealtyFreedomUI_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"direction": "row",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "e4ac1bf8-e7fc-9221-409b-648bccf716a8",
							"code": "PDS_Ndos_SequenceNumber",
							"path": "Ndos_SequenceNumber",
							"caption": "#ResourceString(PDS_Ndos_SequenceNumber)#",
							"dataValueType": 27
						},
						{
							"id": "05fb61de-2be9-aa5f-a9ad-323d2be428e3",
							"code": "PDS_Ndos_Name",
							"path": "Ndos_Name",
							"caption": "#ResourceString(PDS_Ndos_Name)#",
							"dataValueType": 28
						},
						{
							"id": "e71db67a-4869-2c60-0bae-dbe76b309e33",
							"code": "PDS_Ndos_Superficie",
							"path": "Ndos_Superficie",
							"caption": "#ResourceString(PDS_Ndos_Superficie)#",
							"dataValueType": 32
						},
						{
							"id": "2b0201a9-fce5-ec44-4bd4-d8263f3765ec",
							"code": "PDS_Ndos_RealtyType_Freedom",
							"path": "Ndos_RealtyType_Freedom",
							"caption": "#ResourceString(PDS_Ndos_RealtyType_Freedom)#",
							"dataValueType": 10,
							"referenceSchemaName": "Ndos_FUI_RealtyType"
						},
						{
							"id": "9e70f5ff-ff33-fc6d-3810-e4be7151fdab",
							"code": "PDS_Ndos_OperationType_FUI",
							"path": "Ndos_OperationType_FUI",
							"caption": "#ResourceString(PDS_Ndos_OperationType_FUI)#",
							"dataValueType": 10,
							"referenceSchemaName": "Ndos_FUI_TiposdeOperacionesRealty"
						},
						{
							"id": "b25d3fc0-9fd3-d8e4-fc47-bc07c3c946c5",
							"code": "PDS_Ndos_PriceUSD",
							"path": "Ndos_PriceUSD",
							"caption": "#ResourceString(PDS_Ndos_PriceUSD)#",
							"dataValueType": 6
						},
						{
							"id": "8a1085a5-d3bc-a28e-5590-6262d0a76fdd",
							"code": "PDS_Ndos_OwnersEmail",
							"path": "Ndos_OwnersEmail",
							"caption": "#ResourceString(PDS_Ndos_OwnersEmail)#",
							"dataValueType": 45
						},
						{
							"id": "87c9d159-2b24-d4a9-4def-ec8fa00eb6ee",
							"code": "PDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"layoutConfig": {
						"basis": "100%",
						"width": 300
					},
					"primaryColumnName": "PDS_Id",
					"sorting": "$ItemsSorting | crt.ToDataTableSortingConfig: 'Items'",
					"selectedRows": "$DataTable_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "DataTable_SelectedRows"
					}
				}
			},
			{
				"operation": "insert",
				"name": "MainFilterContainer",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "medium",
						"rowGap": "none"
					},
					"items": [],
					"color": "primary",
					"borderRadius": "none",
					"padding": {
						"top": "small",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LeftFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"wrap": "nowrap",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "large"
					},
					"justifyContent": "start",
					"gap": "medium",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FolderTreeActions",
				"values": {
					"type": "crt.FolderTreeActions",
					"caption": "#ResourceString(FolderTreeActions_caption)#",
					"folderTree": "FolderTree"
				},
				"parentName": "LeftFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RightFilterContainer",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "medium",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "end",
					"gap": "none",
					"alignItems": "center"
				},
				"parentName": "MainFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SearchFilter",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(SearchFilter_placeholder)#",
					"targetAttributes": [
						"Items"
					]
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RefreshButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(RefreshButtonCaption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "PDS"
						}
					},
					"iconPosition": "only-icon",
					"icon": "reload-button-icon",
					"clickMode": "default"
				},
				"parentName": "RightFilterContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FolderTree",
				"values": {
					"type": "crt.FolderTree",
					"caption": "#ResourceString(FolderTree_caption)#",
					"sourceSchemaName": "FolderTree",
					"rootSchemaName": "Ndos_RealtyFreedomUI",
					"layoutConfig": {
						"width": 328.125
					},
					"classes": [
						"section-folder-tree"
					]
				},
				"parentName": "SectionContentWrapper",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Items": {
					"viewModelConfig": {
						"attributes": {
							"PDS_Ndos_SequenceNumber": {
								"modelConfig": {
									"path": "PDS.Ndos_SequenceNumber"
								}
							},
							"PDS_Ndos_Name": {
								"modelConfig": {
									"path": "PDS.Ndos_Name"
								}
							},
							"PDS_Ndos_Superficie": {
								"modelConfig": {
									"path": "PDS.Ndos_Superficie"
								}
							},
							"PDS_Ndos_RealtyType_Freedom": {
								"modelConfig": {
									"path": "PDS.Ndos_RealtyType_Freedom"
								}
							},
							"PDS_Ndos_OperationType_FUI": {
								"modelConfig": {
									"path": "PDS.Ndos_OperationType_FUI"
								}
							},
							"PDS_Ndos_PriceUSD": {
								"modelConfig": {
									"path": "PDS.Ndos_PriceUSD"
								}
							},
							"PDS_Ndos_OwnersEmail": {
								"modelConfig": {
									"path": "PDS.Ndos_OwnersEmail"
								}
							},
							"PDS_CreatedOn": {
								"modelConfig": {
									"path": "PDS.CreatedOn"
								}
							},
							"PDS_Id": {
								"modelConfig": {
									"path": "PDS.Id"
								}
							}
						}
					},
					"modelConfig": {
						"path": "PDS",
						"pagingConfig": {
							"rowCount": 30
						},
						"sortingConfig": {
							"attributeName": "ItemsSorting"
						},
						"filterAttributes": [
							{
								"loadOnChange": true,
								"name": "FolderTree_active_folder_filter"
							},
							{
								"name": "Items_PredefinedFilter",
								"loadOnChange": true
							}
						]
					}
				},
				"ItemsSorting": {},
				"FolderTree_visible": {
					"value": false
				},
				"FolderTree_items": {
					"isCollection": true,
					"viewModelConfig": {
						"attributes": {
							"Id": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Id"
								}
							},
							"Name": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Name"
								}
							},
							"ParentId": {
								"modelConfig": {
									"path": "FolderTree_items_DS.Parent.Id"
								}
							},
							"FilterData": {
								"modelConfig": {
									"path": "FolderTree_items_DS.FilterData"
								}
							}
						}
					},
					"modelConfig": {
						"path": "FolderTree_items_DS",
						"filterAttributes": [
							{
								"name": "FolderTree_items_DS_filter",
								"loadOnChange": true
							}
						]
					},
					"embeddedModel": {
						"name": "FolderTree_items_DS",
						"config": {
							"type": "crt.EntityDataSource",
							"config": {
								"entitySchemaName": "FolderTree"
							}
						}
					}
				},
				"FolderTree_active_folder_id": {},
				"FolderTree_active_folder_name": {},
				"FolderTree_active_folder_filter": {
					"value": {}
				},
				"FolderTree_items_DS_filter": {
					"value": {
						"isEnabled": true,
						"trimDateTimeParameterToDate": false,
						"filterType": 6,
						"logicalOperation": 0,
						"items": {
							"3714ebf4-41a3-9a82-8e8b-039d9ac03ce1": {
								"isEnabled": true,
								"trimDateTimeParameterToDate": false,
								"filterType": 1,
								"comparisonType": 3,
								"leftExpression": {
									"expressionType": 0,
									"columnPath": "EntitySchemaName"
								},
								"rightExpression": {
									"expressionType": 2,
									"parameter": {
										"dataValueType": 1,
										"value": "Ndos_RealtyFreedomUI"
									}
								}
							}
						}
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"hiddenInPageDesigner": true,
					"config": {
						"entitySchemaName": "Ndos_RealtyFreedomUI",
						"attributes": {
							"Ndos_SequenceNumber": {
								"path": "Ndos_SequenceNumber"
							},
							"Ndos_Name": {
								"path": "Ndos_Name"
							},
							"Ndos_Superficie": {
								"path": "Ndos_Superficie"
							},
							"Ndos_RealtyType_Freedom": {
								"path": "Ndos_RealtyType_Freedom"
							},
							"Ndos_OperationType_FUI": {
								"path": "Ndos_OperationType_FUI"
							},
							"Ndos_PriceUSD": {
								"path": "Ndos_PriceUSD"
							},
							"Ndos_OwnersEmail": {
								"path": "Ndos_OwnersEmail"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					},
					"scope": "viewElement"
				}
			}
		}/**SCHEMA_MODEL_CONFIG*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});