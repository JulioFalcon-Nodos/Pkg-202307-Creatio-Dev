define("Ndos_RealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "Ndos_RealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "a27c299e-f44e-411d-aa2b-0c707a3f7708",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_Ndos_PushMe",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_Ndos_PushMe_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "document-new-button-icon",
					"clicked": {
						"request": "usr.MyPushMeButton" //"crt.SaveRecordRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_Ndos_SequenceNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_dj04lqg",
					"labelPosition": "auto",
					"control": "$StringAttribute_dj04lqg",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Ndos_Name",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.Ndos_Name",
					"control": "$Ndos_Name",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NumberInput_Ndos_PriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_3uh99pb",
					"labelPosition": "auto",
					"control": "$NumberAttribute_3uh99pb"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_Ndos_Superficie",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_c2nzuzd",
					"labelPosition": "auto",
					"control": "$NumberAttribute_c2nzuzd"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "NumberInput_imu4t7a",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_k43ua7o",
					"labelPosition": "auto",
					"control": "$NumberAttribute_k43ua7o"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ComboBox_Ndos_RealtyType_Freedom",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_7q2udew",
					"labelPosition": "auto",
					"control": "$LookupAttribute_7q2udew",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_n9c9368",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_n9c9368_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_Ndos_RealtyType_Freedom",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_Ndos_OperationType_FUI",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_8clp79p",
					"labelPosition": "auto",
					"control": "$LookupAttribute_8clp79p",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_7jwml60",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_7jwml60_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_Ndos_OperationType_FUI",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EmailInput_Ndos_OwnersEmail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.StringAttribute_35tfhnh",
					"labelPosition": "auto",
					"control": "$StringAttribute_35tfhnh"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_Ndos_CommissionPercentage",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.Ndos_OperationType_FUINdos_CommissionPercentage",
					"labelPosition": "auto",
					"control": "$Ndos_OperationType_FUINdos_CommissionPercentage",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_d8j805i",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Input_Ndos_Comentarios",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 4
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_dle4l36",
					"labelPosition": "left",
					"control": "$StringAttribute_dle4l36",
					"multiline": false,
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_d8j805i",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_rpkdhkc",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_rpkdhkc_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_orywwpa",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rpkdhkc",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_d599b67",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_orywwpa",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_2mxekcx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_2mxekcx_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "small",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "Ndos_RealtyVisit_Freedom",
							"defaultValues": [
								{
									"attributeName": "Ndos_ParentRealty_Freedom",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_d599b67",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ayrzb82",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ayrzb82_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_bra479fDS"
						}
					}
				},
				"parentName": "FlexContainer_d599b67",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_78exib8",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_78exib8_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_d599b67",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_r8shm8x",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_r8shm8x_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_bra479f"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_78exib8",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_yp0eh8l",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_yp0eh8l_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "Ndos_RealtyVisit_Freedom"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_78exib8",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_ssqloj8",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_ssqloj8_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_bra479f"
					]
				},
				"parentName": "FlexContainer_d599b67",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_n4baapf",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_rpkdhkc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_RealtyVisit_FUI",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"selectedRows": "$GridDetail_bra479f_SelectedRows",
					"_filterOptions": {
						"expose": [],
						"from": "GridDetail_bra479f_SelectedRows"
					},
					"visible": true,
					"fitContent": true,
					"items": "$GridDetail_bra479f",
					"primaryColumnName": "GridDetail_bra479fDS_Id",
					"columns": [
						{
							"id": "ae3de088-d623-79d3-b5a5-490770f57eda",
							"code": "GridDetail_bra479fDS_Ndos_VisitDateTime",
							"path": "Ndos_VisitDateTime",
							"caption": "#ResourceString(GridDetail_bra479fDS_Ndos_VisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "72523927-ac5f-e7c6-7c5a-127f9b5903c7",
							"code": "GridDetail_bra479fDS_Ndos_VisitEmployeeInCharge_FUI",
							"path": "Ndos_VisitEmployeeInCharge_FUI",
							"caption": "#ResourceString(GridDetail_bra479fDS_Ndos_VisitEmployeeInCharge_FUI)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "ea45be81-20a7-4e3a-81bc-4839e8903260",
							"code": "GridDetail_bra479fDS_Ndos_PotentialCustomer_FUI",
							"path": "Ndos_PotentialCustomer_FUI",
							"caption": "#ResourceString(GridDetail_bra479fDS_Ndos_PotentialCustomer_FUI)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "7f91757c-2cfb-9dd3-f531-96c9181c063b",
							"code": "GridDetail_bra479fDS_Ndos_Comments",
							"path": "Ndos_Comments",
							"caption": "#ResourceString(GridDetail_bra479fDS_Ndos_Comments)#",
							"dataValueType": 29
						},
						{
							"id": "934a1b41-5535-eeba-6a8d-4b91d6c72a9f",
							"code": "GridDetail_bra479fDS_CreatedOn",
							"path": "CreatedOn",
							"caption": "#ResourceString(GridDetail_bra479fDS_CreatedOn)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_n4baapf",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				},
				"Ndos_Name": {
					"modelConfig": {
						"path": "PDS.Ndos_Name"
					}
				},
				"NumberAttribute_3uh99pb": {
					"modelConfig": {
						"path": "PDS.Ndos_PriceUSD"
					}
				},
				"NumberAttribute_c2nzuzd": {
					"modelConfig": {
						"path": "PDS.Ndos_Superficie"
					}
				},
				"LookupAttribute_7q2udew": {
					"modelConfig": {
						"path": "PDS.Ndos_RealtyType_Freedom"
					}
				},
				"LookupAttribute_8clp79p": {
					"modelConfig": {
						"path": "PDS.Ndos_OperationType_FUI"
					}
				},
				"StringAttribute_dle4l36": {
					"modelConfig": {
						"path": "PDS.Ndos_Comentarios"
					}
				},
				"StringAttribute_35tfhnh": {
					"modelConfig": {
						"path": "PDS.Ndos_OwnersEmail"
					}
				},
				"StringAttribute_dj04lqg": {
					"modelConfig": {
						"path": "PDS.Ndos_SequenceNumber"
					}
				},
				"GridDetail_bra479f": {
					"isCollection": true,
					"modelConfig": {
						"path": "GridDetail_bra479fDS"
					},
					"viewModelConfig": {
						"attributes": {
							"GridDetail_bra479fDS_Ndos_VisitDateTime": {
								"modelConfig": {
									"path": "GridDetail_bra479fDS.Ndos_VisitDateTime"
								}
							},
							"GridDetail_bra479fDS_Ndos_VisitEmployeeInCharge_FUI": {
								"modelConfig": {
									"path": "GridDetail_bra479fDS.Ndos_VisitEmployeeInCharge_FUI"
								}
							},
							"GridDetail_bra479fDS_Ndos_PotentialCustomer_FUI": {
								"modelConfig": {
									"path": "GridDetail_bra479fDS.Ndos_PotentialCustomer_FUI"
								}
							},
							"GridDetail_bra479fDS_Ndos_Comments": {
								"modelConfig": {
									"path": "GridDetail_bra479fDS.Ndos_Comments"
								}
							},
							"GridDetail_bra479fDS_CreatedOn": {
								"modelConfig": {
									"path": "GridDetail_bra479fDS.CreatedOn"
								}
							},
							"GridDetail_bra479fDS_Id": {
								"modelConfig": {
									"path": "GridDetail_bra479fDS.Id"
								}
							}
						}
					}
				},
				"NumberAttribute_k43ua7o": {
					"modelConfig": {
						"path": "PDS.Ndos_Commission"
					}
				},
				"Ndos_OperationType_FUINdos_CommissionPercentage": {
					"modelConfig": {
						"path": "PDS.Ndos_OperationType_FUINdos_CommissionPercentage"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfig: /**SCHEMA_MODEL_CONFIG*/{
			"dataSources": {
				"PDS": {
					"type": "crt.EntityDataSource",
					"config": {
						"entitySchemaName": "Ndos_RealtyFreedomUI",
						"attributes": {
							"Ndos_OperationType_FUINdos_CommissionPercentage": {
								"path": "Ndos_OperationType_FUI.Ndos_CommissionPercentage",
								"type": "ForwardReference"
							}
						}
					},
					"scope": "page"
				},
				"GridDetail_bra479fDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Ndos_RealtyVisit_Freedom",
						"attributes": {
							"Ndos_VisitDateTime": {
								"path": "Ndos_VisitDateTime"
							},
							"Ndos_VisitEmployeeInCharge_FUI": {
								"path": "Ndos_VisitEmployeeInCharge_FUI"
							},
							"Ndos_PotentialCustomer_FUI": {
								"path": "Ndos_PotentialCustomer_FUI"
							},
							"Ndos_Comments": {
								"path": "Ndos_Comments"
							},
							"CreatedOn": {
								"path": "CreatedOn"
							}
						}
					}
				}
			},
			"primaryDataSourceName": "PDS",
			"dependencies": {
				"GridDetail_bra479fDS": [
					{
						"attributePath": "Ndos_ParentRealty_Freedom",
						"relationPath": "PDS.Id"
					}
				]
			}
		}/**SCHEMA_MODEL_CONFIG*/,
			handlers: /**SCHEMA_HANDLERS*/[
				{ // 20230719 - Presionar boton, resultado
					request: ""usr.MyPushMeButton",

					// The custom implementation of the system query handler. 
					handler: async (request, next) => {
						this.console.log("Button works...");
						Terrasoft.showInformation("My button was pressed.");
						var price = await request.$context.NumberAttribute_3uh99pb;
						this.console.log("Price = " + price);
						// Call the next handler if it exists and return its result. 
						return next?.handle(request);
					}					
				},
				{ // 20230720 revisar
					request: "crt.HandleViewModelAttributeChangeRequest",
					/* The custom implementation of the system query handler. */
					handler: async (request, next) => {
						/* If the UsrPriceUSD field changes, take the following steps. */
						if (request.attributeName === 'NumberAttribute_3uh99pb' || 					// if price changed
							request.attributeName === 'Ndos_OperationType_FUINdos_CommissionPercentage' ) { 		// or multiplier changed
							var price = await request.$context.NumberAttribute_3uh99pb;
							var multiplier = await request.$context.Ndos_OperationType_FUINdos_CommissionPercentage;
							var commission = price * multiplier;
							request.$context.NumberAttribute_k43ua7o = commission;
						}
						/* Call the next handler if it exists and return its result. */
						return next?.handle(request);
					}
				}			
			]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});