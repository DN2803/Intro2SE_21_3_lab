USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspFindDrug]    Script Date: 04/01/2024 15:44:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspFindDrug]
				@nameOrID NVARCHAR(50)
AS
BEGIN
			SELECT *
			FROM THUOC
			WHERE @nameOrID = MATHUOC
			UNION
			SELECT *
			FROM THUOC
			WHERE @nameOrID = TENTHUOC
END