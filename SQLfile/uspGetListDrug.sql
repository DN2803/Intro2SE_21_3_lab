USE [QLPHONGKHAM]
GO
/****** Object:  StoredProcedure [dbo].[uspGetListDrug]    Script Date: 04/01/2024 15:44:07 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[uspGetListDrug]
AS
BEGIN
	SELECT *
	FROM THUOC
END