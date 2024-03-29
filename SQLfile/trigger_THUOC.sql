USE [QLPHONGKHAM]
GO
/****** Object:  Trigger [dbo].[GenerateMaThuoc]    Script Date: 19/01/2024 16:02:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE OR ALTER TRIGGER [dbo].[GenerateMaThuoc]
ON [dbo].[THUOC]
AFTER INSERT
AS
BEGIN
    DECLARE @count INT;
	DECLARE @TenThuoc nvarchar(15);
	DECLARE @soLuongRecord INT;

    SET @count = 1;
	SELECT @soLuongRecord = COUNT(*) FROM THUOC_COUNTER
	SELECT @TenThuoc = TENTHUOC FROM INSERTED

    IF @soLuongRecord != 0
    BEGIN
        DECLARE @maxCount INT;
        SELECT @maxCount = MAX(COUNTER) FROM THUOC_COUNTER;

		IF @maxCount = @soLuongRecord
			SET @count = @maxCount + 1;
		ELSE
		BEGIN
			WHILE @count < @maxCount
			BEGIN
				IF EXISTS(SELECT * FROM THUOC_COUNTER WHERE @count = COUNTER)
					SET @count = @count + 1;
				ELSE
					BREAK;
			END
		END
	END

	INSERT INTO THUOC_COUNTER(COUNTER) VALUES (@count)
	DECLARE @MaThuocMoi VARCHAR(10);
    SET @MaThuocMoi = 'MD' + RIGHT('00' + CAST(@count AS VARCHAR), 2);

	UPDATE THUOC
	SET MATHUOC = @MaThuocMoi
	WHERE TENTHUOC = @TenThuoc
END;