﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SsoSamlProviderEventListenerSchema

	/// <exclude/>
	public class SsoSamlProviderEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SsoSamlProviderEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SsoSamlProviderEventListenerSchema(SsoSamlProviderEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("77c5731e-74f5-4fe9-8da0-2db7a47db93c");
			Name = "SsoSamlProviderEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e5aa7639-5b66-4d72-9308-0563d89b2353");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,84,193,110,219,48,12,61,187,64,255,65,203,46,50,86,104,59,103,40,134,52,203,182,2,237,218,205,77,119,24,118,80,28,38,213,96,75,14,37,187,53,138,254,251,40,203,110,156,52,41,178,83,34,137,124,124,143,143,180,150,57,216,66,166,192,110,0,81,90,179,112,98,108,244,66,45,75,148,78,25,45,18,107,18,112,78,233,165,61,62,122,60,62,138,74,75,255,89,82,91,7,249,199,173,179,184,80,122,181,190,236,99,230,133,209,160,93,226,139,137,115,237,0,23,244,207,238,14,70,16,19,237,148,83,7,4,136,73,69,184,59,227,126,193,204,87,206,141,222,247,250,205,185,66,140,102,214,161,76,189,92,15,67,161,111,17,150,116,98,227,76,90,59,100,190,7,50,207,174,209,84,106,14,216,20,188,80,36,88,3,54,241,191,27,50,245,198,3,79,210,59,200,229,119,234,48,59,101,131,45,140,65,252,135,242,138,114,150,169,148,165,190,204,171,85,134,236,76,90,160,136,91,133,174,148,89,103,201,22,149,232,177,161,179,230,79,138,28,150,169,51,72,50,174,155,106,33,162,173,252,90,77,30,179,33,155,81,89,110,219,106,107,69,195,103,65,29,147,65,204,30,159,218,234,160,231,129,192,38,155,75,112,119,102,78,60,80,85,210,65,75,36,28,24,241,244,246,124,5,231,149,142,138,130,232,53,19,56,197,140,152,248,201,139,34,4,87,162,102,228,220,212,169,44,216,191,59,195,27,75,234,29,60,208,184,148,136,164,75,252,132,85,9,214,197,13,84,68,199,34,163,17,228,131,247,31,6,39,109,125,49,201,11,87,199,126,92,162,131,212,236,110,171,169,104,202,168,161,172,50,106,206,174,116,34,43,152,115,51,251,11,169,99,150,0,1,79,88,152,153,209,194,181,125,31,225,210,50,232,164,250,198,139,46,179,75,129,192,44,170,36,50,104,210,105,180,120,0,138,91,224,117,132,109,236,162,136,16,26,54,166,14,38,94,74,45,151,128,190,123,231,52,35,82,167,112,86,123,103,121,99,44,96,165,82,88,15,107,175,172,93,17,162,134,123,214,135,251,81,2,214,60,20,236,20,68,228,115,46,177,110,222,198,38,43,115,77,153,237,91,116,110,71,217,189,172,109,2,153,111,202,41,163,57,133,240,246,212,252,60,245,132,108,210,241,138,236,202,83,15,20,8,219,99,144,41,188,85,58,165,12,114,95,135,219,88,124,81,104,221,21,126,134,133,44,51,199,91,57,106,193,248,22,244,39,209,146,14,124,111,101,86,2,123,67,122,203,44,123,214,21,166,48,96,4,174,47,9,134,86,136,49,2,13,119,160,185,135,220,90,166,183,156,102,151,178,247,108,65,175,35,214,92,152,165,210,19,61,47,140,210,174,181,100,138,138,119,40,239,152,95,207,230,11,96,197,200,82,81,143,227,207,101,14,216,57,44,221,221,11,88,83,186,67,113,19,218,153,12,66,206,75,200,173,182,8,250,86,144,5,189,214,90,190,63,178,23,198,7,251,248,19,33,191,187,91,221,16,55,38,105,214,153,199,7,226,239,208,209,135,238,117,228,255,177,253,86,17,82,219,191,125,73,180,231,252,181,239,78,184,221,188,164,59,246,15,116,239,209,159,194,7,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("77c5731e-74f5-4fe9-8da0-2db7a47db93c"));
		}

		#endregion

	}

	#endregion

}

